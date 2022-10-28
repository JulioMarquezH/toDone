import "./styles.css";

function ViewProject() {
  return (
    <div className="box-modal-description">
      <section className="content-modal">
        <p className="descrition-modal">
          Description <strong className="project-modal">Project</strong>
        </p>
        <div className="content">
          <p className="text">
            Conclusiones: Sugerimos como estudio inicial del niño con SFASF y de
            buen aspecto general, la realización de un examen de orina con
            urocultivo^len^aFever is
          </p>
          <p className="text-Goal">
            Project <strong className="text">Name Project</strong>
          </p>
          <p className="text-Goal">
            Start date <strong className="text">day/month</strong>
          </p>
          <p className="text-Goal">
            End date <strong className="text">day/month</strong>
          </p>
          <p className="text-Goal">Missing Goal</p>
          <ul>
            <li className="text">no se realmente</li>
            <li className="text">aca menos</li>
            <li className="text">ya me acorde pero no me alcanza</li>
          </ul>
        </div>
        <button className="save">Add Goal</button>
      </section>
    </div>
  );
}

export default ViewProject;
