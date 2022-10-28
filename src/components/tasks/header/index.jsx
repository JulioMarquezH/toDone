import ButtonProject from "./button/project";
import ButtonTask from "./button/task";

function HeaderTask({ handleAddTask, handleAddProject }) {
  return (
    <section className="title">
      <h1>
        You’ve got
        <strong className="title-color"> 7 task </strong>
        today
      </h1>
      <ButtonTask handleAddTask={handleAddTask} />
      <ButtonProject handleAddProject={handleAddProject} />
    </section>
  );
}
export default HeaderTask;
