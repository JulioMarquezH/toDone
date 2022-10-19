import React from "react";
import point from "../../../img/piont.png";
import Ellipse1 from "../../../img/Ellipse1.png";
import grupo1 from "../../../img/grupo1.png";
import piont3 from "../../../img/piont3.png";
import clsx from "clsx";
import Task from "../task/Task";
import "./style-TaskList.css";

const nameTask = [
  {
    nameTask: "Evaluate the addition and deletion of user IDs.",
    status: "Pending",
    priority: "Minor",
    asignates: [
      {
        name: "juan",
        avatar: "xxx",
      },
    ],
  },
  {
    nameTask: "Identify the implementation team.",
    status: "In Progress",
    priority: "Normal",
    asignates: [
      {
        name: "juan",
        avatar: "xxx",
      },
    ],
  },
  {
    nameTask: "afafasfa",
    status: "Pending",
    priority: "Critical",
    asignates: [
      {
        name: "juan",
        avatar: "xxx",
      },
    ],
  },
  {
    nameTask: "sdafafafas",
    status: "Cancelled",
    priority: "Minor",
    asignates: [
      {
        name: "juan",
        avatar: "xxx",
      },
    ],
  },
];
let numberItem;
function taskList({ handleShowGoal, isUser }) {
  numberItem = nameTask.length - 1;
  return (
    <ul className="list-task">
      {nameTask.map((item, index) => {
        const isLine = numberItem === index;
        const props = { ...item, isLine, isUser };
        return <Task handleShowGoal={handleShowGoal} key={index} {...props} />;
      })}
    </ul>
  );
}

export default taskList;

/*


function task(){


    return (
        taskList.map((iten, index) => {

        })

    )
}
const { status } = item;
const isPending = status === "pending";


*/

/*
<img src="./img/piont.png" alt="" />
      <p className="task-type">
        Evaluate the addition and deletion of user IDs.
      </p>
      <section className={clsx(isPending && "task-state-Pending")}>
        <p>Pending</p>
      </section>
      <section className="task-flex">
        <img src="./img/Ellipse1.png" alt="" />
        <p className="minor">Minor</p>
      </section>
      <section>
        <img src="./img/grupo1.png" alt="" className="users" />
      </section>
      <img src="./img/piont3.png" alt="" className="task-img" />
*/
