import React from "react";
import "./style-NewTask.css";

function NewTask() {
  return (
    <div class="box-modal-description">
      <section class="content-modal">
        <p class="descrition-modal">
          New <strong class="project-modal">Task</strong>
        </p>
        <div class="borde-new">
          <p class="text-project">Name project</p>
          <section class="box-new">
            <p class="text">Name goal</p>
            <p class="text">Name task</p>
            <p class="text">Status</p>
          </section>
        </div>
      </section>
    </div>
  );
}

export default NewTask;
