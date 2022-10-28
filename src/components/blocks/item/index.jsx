import clsx from "clsx";
import "./styles.css";
import piont from "images/piont.png";
import Ellipse1 from "images/Ellipse1.png";
import Ellipse2 from "images/Ellipse2.png";
import Ellipse3 from "images/Ellipse3.png";
import user5 from "images/user5.png";
import point3 from "images/piont3.png";
import priorityMessages from "helpers/priorityMessages";
import statusTasks from "helpers/statusTasks";

function ItemBlock({
  nameTask,
  status,
  priority,
  isLine,
  asignates,
  handleClick,
  isUser,
}) {
  const { isPending, isCompleted, isCancelled, isInProgress } =
    statusTasks(status);
  const { isMinor, isNormal, isMayor, isCritical } = priorityMessages(priority);

  return (
    <>
      <li className="task">
        <div className="task-title">
          <img src={piont} alt="" className="point" />
          <p onClick={handleClick} className="task-type task-p">
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
              isCompleted && "task-state-completed",
              isCancelled && "task-state-cancelled"
            )}
          >
            <p>{status}</p>
          </section>
          <section
            aria-label={priority}
            data-balloon-pos="right"
            className="task-flex"
          >
            <img src={Ellipse1} alt="" className={clsx(!isMinor && "isNone")} />
            <img
              src={Ellipse2}
              alt=""
              className={clsx(!isNormal && "isNone")}
            />
            <img
              src={Ellipse3}
              alt=""
              className={clsx(!isCritical && "isNone")}
            />
            <p className="minor task-p">{priority}</p>
          </section>
        </div>
        <div className="task-responsible">
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

export default ItemBlock;
