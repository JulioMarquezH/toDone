import React from "react";
import "./stye-DescriptionEdit.css";

function DescriptionEdit() {
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
            Goal
            <input type="text" placeholder="New Title" class="option-edit" />
          </p>
          <textarea
            placeholder="Description"
            name=""
            id=""
            cols="30"
            rows="10"
            class="description-edit"
          ></textarea>
          <p class="text-Goal">Missing Tasks</p>
          <ul>
            <li class="text-li">
              no se realmente <button class="check">x</button>
            </li>
            <li class="text-li">
              aca menos <button class="check">x</button>
            </li>
            <li class="text-li">
              ya me acorde pero no me alcanza <button class="check">x</button>
            </li>
          </ul>
        </div>
        <button class="save">Save</button>
      </section>
    </div>
  );
}

export default DescriptionEdit;
