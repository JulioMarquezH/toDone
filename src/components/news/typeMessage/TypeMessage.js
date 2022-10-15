import React from "react";
import "./style-TypeMessage.css";
import user4 from "../../../img/user4.png";
function TypeMessage() {
  return (
    <section>
      <div className="face">
        <img src={user4} alt="" className="image-face" />
        <address>
          <section className="profile">
            <p className="profile-name">Chance Rhiel Madsen</p>
            <p className="profile-text">2 hour ago</p>
          </section>
          <p className="face-text">
            Comment on your task
            <strong className="ui">UI Design</strong>
          </p>
        </address>
      </div>
    </section>
  );
}

export default TypeMessage;
