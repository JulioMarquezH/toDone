const CLOSE_MODAL = "";
const ADD_TASK = "addTask";
const ADD_PROJECT = "addProject";
const SHOW_GOAL = "showGoal";
const SHOW_TASK = "showTask";
const SHOW_PROJECT = "showProject";
const SHOW_NOTIFICATION = "showNotification";

function handleModal(fn) {
  const handleClose = () => fn(CLOSE_MODAL);
  const handleAddTask = () => fn(ADD_TASK);
  const handleAddProject = () => fn(ADD_PROJECT);
  const handleShowGoal = () => fn(SHOW_GOAL);
  const handleNotification = () => fn(SHOW_NOTIFICATION);
  const handleShowTask = () => fn(SHOW_TASK);
  const handleShowProject = () => fn(SHOW_PROJECT);
  return {
    handleClose,
    handleAddTask,
    handleAddProject,
    handleShowGoal,
    handleShowTask,
    handleShowProject,
    handleNotification,
  };
}

export default handleModal;
export {
  CLOSE_MODAL,
  ADD_TASK,
  ADD_PROJECT,
  SHOW_GOAL,
  SHOW_TASK,
  SHOW_PROJECT,
  SHOW_NOTIFICATION,
};
