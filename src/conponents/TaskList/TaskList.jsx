import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import { selectTasks, selectStatusFilter } from "../../redux/tasks/selectors";
import { statusFilters } from "../../redux/tasks/constants";
import css from "./TaskList.module.css";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter((task) => !task.completed);
    case statusFilters.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const statusFilter = useSelector(selectStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
