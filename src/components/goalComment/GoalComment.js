import React from "react";
import "./style-GoalComment.css";

function GoalComment() {
  return (
    <div class="box-modal-description">
      <section class="content-modal">
        <p class="descrition-modal">
          Goal <strong class="project-modal">Comment</strong>
        </p>
        <div class="content">
          <textarea
            placeholder="Description"
            name=""
            id=""
            cols="30"
            rows="10"
            class="description-edit"
          ></textarea>
          <select name="" id="" class="option-edit">
            <option value="">Minor</option>
            <option value="">Normal</option>
            <option value="">Critical</option>
          </select>
        </div>
        <button class="comment">Save</button>
      </section>
    </div>
  );
}

export default GoalComment;
