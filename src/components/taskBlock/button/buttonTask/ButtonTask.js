import React from "react";
import group from "../../../../img/Group.png";
import "./style-ButtonTask.css";

function ButtonTask({ handleAddTask }) {
  return (
    <>
      <button className="add-task button-on" onClick={handleAddTask}>
        <img src={group} alt="" />
      </button>
      <button className="add-task" onClick={handleAddTask}>
        <img src={group} alt="" />
        Task
      </button>
    </>
  );
}

export default ButtonTask;
