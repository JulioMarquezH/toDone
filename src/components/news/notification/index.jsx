import vector from "images/Vector.png";
import "./styles.css";

function Notification({ action, time }) {
  return (
    <section className="square">
      <div>
        <p className="send">{action}</p>
        <p className="square-text">{` ${time}`}</p>
      </div>
      <img src={vector} alt="" />
    </section>
  );
}

export default Notification;
