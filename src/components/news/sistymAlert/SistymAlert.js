import React from "react";
import "./style-SistymAlert.css";
function SistymAlert() {
  return (
    <section className="sistym-alert">
      <section className="square">
        <p className="send">
          Your message to <strong className="">Leo Dias</strong> has been sent.
        </p>
        <p className="square-text">- Just Now</p>
      </section>
      <p className="sistym-alert-text">
        Planning for new event at Sydney room for new project on coming week.
      </p>
    </section>
  );
}

export default SistymAlert;
