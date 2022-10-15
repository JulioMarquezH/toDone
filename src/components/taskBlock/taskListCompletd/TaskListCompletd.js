import React from "react";
import point from "../../../img/piont.png";
import Ellipse1 from "../../../img/Ellipse1.png";
import grupo1 from "../../../img/grupo1.png";
import piont3 from "../../../img/piont3.png";
import clsx from "clsx";
import Task from "../task/Task";
import "./style-TaskListCompletd.css";

const nameTaskCompletd = [
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
];
let numberItem;
function taskListCompletd() {
  numberItem = nameTaskCompletd.length - 1;
  return (
    <div className="opacity">
      {nameTaskCompletd.map((item, index) => {
        const isLine = numberItem === index;
        const props = { ...item, isLine };
        return <Task key={index} {...props} />;
      })}
    </div>
  );
}

export default taskListCompletd;
