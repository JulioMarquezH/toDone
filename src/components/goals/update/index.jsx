import "./styles.css";

function GoalUpdate() {
  return (
    <div className="box-modal-description">
      <section className="content-modal">
        <p className="descrition-modal">
          Description <strong className="project-modal">Goal</strong>
        </p>
        <div className="content">
          <p className="text-project">
            Project <strong className="text">Terminar pagina</strong>
          </p>
          <p className="text-Goal">
            Goal
            <input
              type="text"
              placeholder="New Title"
              className="option-edit"
            />
          </p>
          <textarea
            placeholder="Description"
            name=""
            id=""
            cols="30"
            rows="10"
            className="description-edit"
          ></textarea>
          <p className="text-Goal">Missing Tasks</p>
          <ul>
            <li className="text-li">
              no se realmente <button className="check">x</button>
            </li>
            <li className="text-li">
              aca menos <button className="check">x</button>
            </li>
            <li className="text-li">
              ya me acorde pero no me alcanza{" "}
              <button className="check">x</button>
            </li>
          </ul>
        </div>
        <button className="save">Save</button>
      </section>
    </div>
  );
}

export default GoalUpdate;
