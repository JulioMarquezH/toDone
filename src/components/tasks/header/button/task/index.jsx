import group from "images/Group.png";
import "./styles.css";

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
