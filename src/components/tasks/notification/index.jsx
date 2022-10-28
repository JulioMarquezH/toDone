import "./styles.css";

function NotificationTask() {
  return (
    <div className="box-modal-description">
      <section className="content-modal">
        <p className="descrition-modal">
          New <strong className="project-modal">Task</strong>
        </p>
        <div className="borde-new">
          <p className="text-project">Name project</p>
          <section className="box-new">
            <p className="text">Name goal</p>
            <p className="text">Name task</p>
            <p className="text">Status</p>
          </section>
        </div>
      </section>
    </div>
  );
}

export default NotificationTask;
