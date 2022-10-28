import "./styles.css";

function ViewTask() {
  return (
    <div className="box-modal-description">
      <section className="content-modal">
        <p className="descrition-modal">
          Description <strong className="project-modal">Task</strong>
        </p>
        <div className="content">
          <p className="text-Goal">
            Project <strong className="text">Name Project</strong>
          </p>
          <p className="text-Goal">
            Goal <strong className="text">Name Goal</strong>
          </p>
          <p className="text-Goal">
            Task <strong className="text">Name Task</strong>
          </p>
          <p className="text">
            Conclusiones: Sugerimos como estudio inicial del niño con SFASF y de
            buen aspecto general, la realización de un examen de orina con
            urocultivo^len^aFever is
          </p>
        </div>
        <button className="save">Edit</button>
      </section>
    </div>
  );
}

export default ViewTask;
