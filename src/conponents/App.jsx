import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getError, getIsLoading, getTasks } from "../redux/tasks/selectors";
import Layout from "./Layout/Layout";
import { AppBar } from "./AppBar/AppBar";
import TaskList from "./TaskList/TaskList";
import { fetchTasks } from "../redux/tasks/operations";
import { TaskForm } from "./TaskForm/TaskForm";
// import StartEl from "./StartEl/StartEl";
// import GetTasks from "./GetTasks/GetTasks";
// import { StatusFilter } from "./StatusFilter/StatusFilter";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Layout>
        <TaskForm />
        <TaskList />
        {/* <StartEl /> */}
        {/* <GetTasks /> */}
      </Layout>
    </>
  );
}

export default App;
