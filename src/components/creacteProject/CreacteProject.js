import React from "react";
import "./style-CreacteProject.css";

function CreacteProject() {
  return (
    <div class="box-modal">
      <section class="content-modal">
        <p class="creacte-modal">
          Creacte <strong class="project-modal">Project</strong>
        </p>
        <form action="">
          <section>
            <input type="text" class="title-task" placeholder="Title" />
          </section>
          <section>
            <textarea
              placeholder="Description"
              name=""
              id=""
              cols="30"
              rows="10"
              class="description-task"
            ></textarea>
          </section>
          <section>
            <select class="priority-task option-modal">
              <option>Minor</option>
              <option>Normal</option>
              <option>Critical</option>
            </select>
          </section>
          <section>
            <select class="status-task option-modal">
              <option>Start</option>
              <option>Normal</option>
              <option>Critical</option>
            </select>
          </section>
          <section>
            <select class="user-task option-modal">
              <option>end</option>
              <option>Normal</option>
              <option>Critical</option>
            </select>
          </section>
        </form>
        <button class="save-project">Save</button>
      </section>
    </div>
  );
}

export default CreacteProject;
