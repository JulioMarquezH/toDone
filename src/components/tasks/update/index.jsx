import "./styles.css";

function UpdateTask() {
  return (
    <div className="box-modal">
      <section className="content-modal">
        <p className="creacte-modal">
          Creacte <strong className="task-modal">Task</strong>
        </p>
        <form action="">
          <section>
            <input type="text" className="title-task" placeholder="Title" />
          </section>
          <section>
            <textarea
              placeholder="Description"
              name=""
              id=""
              cols="30"
              rows="10"
              className="description-task"
            ></textarea>
          </section>
          <section>
            <select className="priority-task option-modal">
              <option>Minor</option>
              <option>Normal</option>
              <option>Critical</option>
            </select>
          </section>
          <section>
            <select className="status-task option-modal">
              <option>nose</option>
              <option>Normal</option>
              <option>Critical</option>
            </select>
          </section>
          <section>
            <select className="user-task option-modal">
              <option>nose</option>
              <option>Normal</option>
              <option>Critical</option>
            </select>
          </section>
          <section>
            <select className="goal-task option-modal">
              <option>nose</option>
              <option>Normal</option>
              <option>Critical</option>
            </select>
          </section>
        </form>
        <button className="save">Save</button>
      </section>
    </div>
  );
}

export default UpdateTask;
