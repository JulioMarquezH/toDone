import React from "react";
import clsx from "clsx";
import "./style-Task.css";
import piont from "../../../img/piont.png";
import Ellipse1 from "../../../img/Ellipse1.png";
import Ellipse2 from "../../../img/Ellipse2.png";
import Ellipse3 from "../../../img/Ellipse3.png";
import user5 from "../../../img/user5.png";
import point3 from "../../../img/piont3.png";

function Task({
  nameTask,
  status,
  priority,
  isLine,
  asignates,
  handleShowGoal,
  isUser,
}) {
  const isPending = status === "Pending";
  const isInProgress = status === "In Progress";
  const isCompletd = status === "Completd";
  const isCancelled = status === "Cancelled";
  const isMinor = priority !== "Minor";
  const isNormal = priority !== "Normal";
  const isCritical = priority !== "Critical";

  return (
    <>
      <li className="task">
        <div className="task-title">
          <img src={piont} alt="" className="point" />
          <p onClick={handleShowGoal} className="task-type task-p">
            {nameTask}
          </p>
        </div>
        <div className="task-indicators">
          <section
            aria-label={status}
            data-balloon-pos="left"
            className={clsx(
              isPending && "task-state-Pending",
              isInProgress && "task-state-InPending",
              isCompletd && "task-state-completed",
              isCancelled && "task-state-cancelled"
            )}
          >
            <p>{status}</p>
          </section>
          <section
            aria-label={priority}
            data-balloon-pos="up"
            className="task-flex"
          >
            <img src={Ellipse1} alt="" className={clsx(isMinor && "isNone")} />
            <img src={Ellipse2} alt="" className={clsx(isNormal && "isNone")} />
            <img
              src={Ellipse3}
              alt=""
              className={clsx(isCritical && "isNone")}
            />
            <p className="minor task-p">{priority}</p>
          </section>
        </div>
        <div className="task-responsibles">
          {isUser && (
            <section>
              <img src={user5} alt="" className="users" />
            </section>
          )}
          <img src={point3} alt="" className="task-img" />
        </div>
      </li>
      <hr className={clsx("line", isLine && "isNone")} />
    </>
  );
}

export default Task;
