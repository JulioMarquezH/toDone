import "./styles.css";

function GoalComments() {
  return (
    <div className="box-modal-description">
      <section className="content-modal">
        <p className="descrition-modal">
          Description <strong className="project-modal">Comment</strong>
        </p>
        <div className="content">
          <textarea
            placeholder="Description"
            name=""
            id=""
            cols="30"
            rows="10"
            className="description-edit"
          ></textarea>
          <select name="" id="" className="option-edit">
            <option value="">Minor</option>
            <option value="">Normal</option>
            <option value="">Critical</option>
          </select>
        </div>
        <button className="comment">Save</button>
      </section>
    </div>
  );
}

export default GoalComments;
