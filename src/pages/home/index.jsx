import { useState } from "react";

import NavBar from "layouts/navBar";
import Main from "pages/home/main";
import Aside from "pages/home/aside";
import Modal from "components/modal/Modal";

import CreateTask from "components/tasks/create";
import PipeAddProject from "pages/home/pipes/addProject";
import PipeViewGoal from "pages/home/pipes/viewGoal";
import PipeShowTask from "pages/home/pipes/showTask";
//import ViewProject from "components/projects/view";

import handleModal from "helpers/handleModal";
import { CLOSE_MODAL, ADD_TASK } from "helpers/handleModal";
import { ADD_PROJECT, SHOW_GOAL } from "helpers/handleModal";
import { SHOW_TASK, SHOW_PROJECT } from "helpers/handleModal";

import "./styles.css";

function Home() {
  const [isOpen, setIsOpen] = useState(CLOSE_MODAL);
  const { handleShowGoal, handleShowTask, handleShowProject } =
    handleModal(setIsOpen);
  const { handleClose, handleAddTask, handleAddProject } =
    handleModal(setIsOpen);

  return (
    <div className="container">
      <NavBar />
      <div className="contents">
        <Main
          handleAddTask={handleAddTask}
          handleShowGoal={handleShowGoal}
          handleShowTask={handleShowTask}
          handleAddProject={handleAddProject}
          handleShowProject={handleShowProject}
        />
        <Aside />
      </div>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        {isOpen === ADD_PROJECT && <PipeAddProject />}
        {isOpen === ADD_TASK && (
          <CreateTask
            optionsUsers={[{ value: 2, label: "maria" }]}
            optionsGoals={[{ value: 1, label: "toso" }]}
          />
        )}
        {isOpen === SHOW_TASK && <PipeShowTask />}
        {isOpen === SHOW_GOAL && <PipeViewGoal />}
        {isOpen === SHOW_PROJECT && <PipeViewGoal />}
      </Modal>
    </div>
  );
}

export default Home;
