import React from "react";
import "./style-Message.css";
import user2 from "../../../img/user2.png";

function message() {
  return (
    <section>
      <div className="face">
        <img src={user2} alt="" className="image-face" />
        <address>
          <section className="profile">
            <p className="profile-name">Alena Curtis</p>
            <p className="profile-text">- Just Now</p>
          </section>
          <p className="face-text">
            Planning for new event at Sydney room for new project on
            <strong className="time">14:00 PM</strong>
          </p>
        </address>
      </div>
    </section>
  );
}

export default message;
