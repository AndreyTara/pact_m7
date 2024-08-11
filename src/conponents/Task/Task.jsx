// src/components/Task/Task.jsx
import css from "./Task.module.css";
import { useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import { deleteTask, toggleCompleted } from "../../redux/tasks/operations";
import { Button } from "../Button/Button";
export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task));

  return (
    <div className={css.wrapTask}>
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />
      <h3>{task.text}</h3>
      <Button onClick={handleDelete}>
        <MdClose size={24} />
      </Button>
    </div>
  );
};
