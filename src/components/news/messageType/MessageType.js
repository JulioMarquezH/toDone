import React from "react";
import "./style-MessageType.css";
import user3 from "../../../img/user3.png";
import zip from "../../../img/zip.png";
import icon2 from "../../../img/icon2.png";

function MessageType() {
  return (
    <>
      <section>
        <div className="face">
          <img src={user3} alt="" className="image-face" />
          <address>
            <section className="profile">
              <p className="profile-name">Alena Curtis</p>
              <p className="profile-text">1 hour ago</p>
            </section>
            <p className="face-text">
              Attached new design file to
              <strong className="flow">Userflow</strong>
            </p>
          </address>
        </div>
      </section>
      <div className="img">
        <span>
          <img src={zip} alt="" className="img-zip" />
        </span>
        <img src={icon2} alt="" className="" />
      </div>
    </>
  );
}

export default MessageType;
