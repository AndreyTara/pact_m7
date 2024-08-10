import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../redux/tasks/operations";
import { selectorTasks } from "../../redux/tasks/selectors";

const GetTasks = () => {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector(selectorTasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <p>Errors-loading-items</p>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      {/* <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p> */}
      <ul>
        {items.length > 0 &&
          items.map((item) => {
            const { id, createdAt, completed } = item;
            return (
              <li key={id}>
                <p>CreatedAt: {item.createdAt}</p>
                <p>Completed: {item.completed.toString()}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default GetTasks;
