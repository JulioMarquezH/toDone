import React from "react";
import "./style-SistymMessage.css";
import vector from "../../../img/Vector.png";

function SistymMessage() {
  return (
    <section className="sistym-message">
      <section className="square">
        <div>
          <p className="send">System message</p>
          <p className="square-text">- Just Now</p>
        </div>
        <img src={vector} alt="" />
      </section>
      <p className="please">Please update your profile</p>
    </section>
  );
}

export default SistymMessage;
