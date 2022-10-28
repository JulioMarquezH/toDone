import "./styles.css";

function GoalView() {
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
            Goal <strong className="text">Hacer frenwork</strong>
          </p>
          <p className="text">
            Traduce texto y archivos completos de manera instantánea.
            Traducciones precisas para particulares (un solo usuario) y equipos
            de trabajo.
          </p>
          <p className="text-Goal">Missing Tasks</p>
          <ul>
            <li className="text">no se realmente</li>
            <li className="text">aca menos</li>
            <li className="text">ya me acorde pero no me alcanza</li>
          </ul>
        </div>
        <button className="save-edit">Edit</button>
        <button className="save-comment">Add Comment</button>
      </section>
    </div>
  );
}

export default GoalView;
