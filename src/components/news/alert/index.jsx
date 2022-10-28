import "./styles.css";
function Alert({ action, name, time, to }) {
  return (
    <header className="square">
      <p className="send">
        {action}
        <strong>{` ${name}`}</strong>
        {` ${to}`}
      </p>
      <p className="square-text">{` ${time}`}</p>
    </header>
  );
}

export default Alert;
