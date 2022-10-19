import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import TaskBlock from "./components/taskBlock/TasksBlock";
import News from "./components/news/News";
import ModalAddProject from "./components/modal/ModalAddProject";
import Modal from "./components/modal/Modal";
import ModalAddTask from "./components/modal/ModalAddTask";
import ModalGoal from "./components/modal/ModalGoal";

const CLOSE_MODAL = "";
const TASK_MODAL = "task";
const PROJECT_MODAL = "project";
const GOAL_MODAL = "goal";

function App() {
  const [isOpen, setIsOpen] = useState(CLOSE_MODAL);
  const handleClose = () => setIsOpen(CLOSE_MODAL);
  const handleAddTask = () => setIsOpen(TASK_MODAL);
  const handleAddProject = () => setIsOpen(PROJECT_MODAL);
  const handleShowGoal = () => setIsOpen(GOAL_MODAL);
  return (
    <div className="container">
      <NavBar />
      <div className="contents">
        <main>
          <TaskBlock
            handleAddTask={handleAddTask}
            handleAddProject={handleAddProject}
            handleShowGoal={handleShowGoal}
          />
        </main>
        <News />
      </div>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        {isOpen === PROJECT_MODAL && <ModalAddProject />}
        {isOpen === TASK_MODAL && <ModalAddTask />}
        {isOpen === GOAL_MODAL && <ModalGoal />}
      </Modal>
    </div>
  );
}

export default App;

/*
      <Modal addTaskClose={addTaskClose} addTask={addTask}>
        <ModalAddTask />
      </Modal>
*/
