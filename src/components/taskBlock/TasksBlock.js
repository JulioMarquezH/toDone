import React from "react";
import group from "../../img/Group.png";
import point from "../../img/piont.png";
import Ellipse1 from "../../img/Ellipse1.png";
import TaskList from "./taskList/TaskList";
import "./style-TaskBlock.css";
import ButtonProject from "./button/buttonProject/ButtonProject";
import ButtonTask from "./button/buttonTask/ButtonTask";
import TaskListCompletd from "./taskListCompletd/TaskListCompletd";
//import ModalProject from "../modal/ModalProject";

function TaskBlock({ handleAddTask, handleAddProject, handleShowGoal }) {
  return (
    <main>
      <section className="title">
        <h1>
          You’ve got
          <strong className="title-color"> 7 task</strong>
          today
        </h1>
        <ButtonTask handleAddTask={handleAddTask} />
        <ButtonProject handleAddProject={handleAddProject} />
      </section>
      <div className="tasks block">
        <p className="on-hold">On Hold</p>
        <TaskList handleShowGoal={handleShowGoal} />
        <div className="tag completed">
          <p className="completed-text">Completed</p>
          <section className="inactive">
            <p>inactive</p>
          </section>
        </div>
        <TaskList handleShowGoal={handleShowGoal} isUser />
        <div className="tag completed">
          <p className="completed-text">Completed</p>
          <section className="inactive">
            <p>inactive</p>
          </section>
        </div>
        <TaskListCompletd isUser />
      </div>
    </main>
  );
}

export default TaskBlock;

/*

        <address className="task secundary">
          <img src="./img/piont.png" alt="" />
          <p className="task-type">
            Install console machines and prerequisite software.
          </p>
          <section className="task-state-completed">
            <p>Completed</p>
          </section>
          <section className="task-flex">
            <img src="./img/Ellipse3.png" alt="" />
            <p className="critical">Critical</p>
          </section>
          <section>
            <img src="./img/grupo1.png" alt="" className="users" />
          </section>
          <img src="./img/piont3.png" alt="" className="task-img" />
        </address>
        <hr className="line" />
        <address className="task secundary">
          <img src="./img/piont.png" alt="" />
          <p className="task-type">
            Design a relatively simple business system
          </p>
          <section className="task-state-Pending">
            <p>Progress</p>
          </section>
          <section className="task-flex">
            <img src="./img/Ellipse3.png" alt="" />
            <p className="critical">Critical</p>
          </section>
          <section>
            <img src="./img/grupo2.png" alt="" className="users1" />
          </section>
          <img src="./img/piont3.png" alt="" className="task-img" />
        </address>
        <hr className="line" />
        <address className="task secundary">
          <img src="./img/piont.png" alt="" />
          <p className="task-type">Define users and workflow</p>
          <section className="task-state-cancelled">
            <p>Cancelled</p>
          </section>
          <section className="task-flex">
            <img src="./img/Ellipse1.png" alt="" />
            <p className="minor">Minor</p>
          </section>
          <section>
            <img src="./img/grupo2.png" alt="" className="users1" />
          </section>
          <img src="./img/piont3.png" alt="" className="task-img" />
        </address>
*/
