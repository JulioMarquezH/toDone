import group from "images/Group.png";
import "./styles.css";

function ButtonProject({ handleAddProject }) {
  return (
    <>
      <button className="add-Project button-on" onClick={handleAddProject}>
        <img src={group} alt="" />
      </button>
      <button className="add-Project" onClick={handleAddProject}>
        <img src={group} alt="" />
        Project
      </button>
    </>
  );
}

export default ButtonProject;
