import React from "react";
import "./style-DescriptionProject.css";

function DescriptionProject() {
  return (
    <div class="box-modal-description">
      <section class="content-modal">
        <p class="descrition-modal">
          Description <strong class="project-modal">Project</strong>
        </p>
        <div class="content">
          <p class="text">
            Conclusiones: Sugerimos como estudio inicial del niño con SFASF y de
            buen aspecto general, la realización de un examen de orina con
            urocultivo^len^aFever is
          </p>
          <p class="text-Goal">
            Project <strong class="text">Name Project</strong>
          </p>
          <p class="text-Goal">
            Start date <strong class="text">day/month</strong>
          </p>
          <p class="text-Goal">
            End date <strong class="text">day/month</strong>
          </p>
          <p class="text-Goal">Missing Goal</p>
          <ul>
            <li class="text">no se realmente</li>
            <li class="text">aca menos</li>
            <li class="text">ya me acorde pero no me alcanza</li>
          </ul>
        </div>
        <button class="save">Add Goal</button>
      </section>
    </div>
  );
}

export default DescriptionProject;
