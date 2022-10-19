import React from "react";
import "./style-DescriptionGoal.css";

function DescriptionGoal() {
  return (
    <div class="box-modal-description">
      <section class="content-modal">
        <p class="descrition-modal">
          Description <strong class="project-modal">Goal</strong>
        </p>
        <div class="content">
          <p class="text-project">
            Project <strong class="text">Terminar pagina</strong>
          </p>
          <p class="text-Goal">
            Goal <strong class="text">Hacer frenwork</strong>
          </p>
          <p class="text">
            Traduce texto y archivos completos de manera instantánea.
            Traducciones precisas para particulares (un solo usuario) y equipos
            de trabajo.
          </p>
          <p class="text-Goal">Missing Tasks</p>
          <ul>
            <li class="text">no se realmente</li>
            <li class="text">aca menos</li>
            <li class="text">ya me acorde pero no me alcanza</li>
          </ul>
        </div>
        <button class="save-edit">Edit</button>
        <button class="save-comment">Add Comment</button>
      </section>
    </div>
  );
}

export default DescriptionGoal;
