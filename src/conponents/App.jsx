import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectorTasks } from "../redux/tasks/selectors";
import StartEl from "./StartEl/StartEl";
import GetTasks from "./GetTasks/GetTasks";

function App() {
  return (
    <>
      <StartEl />
      <GetTasks />
    </>
  );
}

export default App;
