import React from "react";
import "./style-DescriptionTask.css";

function DescriptionTask() {
  return (
    <div class="box-modal-description">
      <section class="content-modal">
        <p class="descrition-modal">
          Description <strong class="project-modal">Task</strong>
        </p>
        <div class="content">
          <p class="text-Goal">
            Project <strong class="text">Name Project</strong>
          </p>
          <p class="text-Goal">
            Goal <strong class="text">Name Goal</strong>
          </p>
          <p class="text-Goal">
            Task <strong class="text">Name Task</strong>
          </p>
          <p class="text">
            Conclusiones: Sugerimos como estudio inicial del niño con SFASF y de
            buen aspecto general, la realización de un examen de orina con
            urocultivo^len^aFever is
          </p>
        </div>
        <button class="save">Edit</button>
      </section>
    </div>
  );
}

export default DescriptionTask;
