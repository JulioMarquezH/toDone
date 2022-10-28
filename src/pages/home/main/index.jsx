import "./styles.css";
import ItemBlock from "components/blocks/list";
import HeaderTask from "components/tasks/header";
import TitleBlock from "components/blocks/title";

function Main({
  handleAddTask,
  handleAddProject,
  handleShowGoal,
  handleShowProject,
  handleShowTask,
}) {
  return (
    <main>
      <HeaderTask
        handleAddTask={handleAddTask}
        handleAddProject={handleAddProject}
      />
      <div className="tasks block">
        <TitleBlock title="On Hold" isSimpler />
        <ItemBlock handleClick={handleShowTask} />
        <TitleBlock title="Completed" tag="inactive" />
        <ItemBlock handleClick={handleShowGoal} isUser />
        <TitleBlock title="Completed" tag="inactive" />
        <ItemBlock handleClick={handleShowProject} isUser isCompleted />
      </div>
    </main>
  );
}

export default Main;
