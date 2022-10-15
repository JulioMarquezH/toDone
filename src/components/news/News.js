import React from "react";
import "./style-News.css";
import Message from "./message/Message";
import SistymAlert from "./sistymAlert/SistymAlert";
import SistymMessage from "./sistymMessage/SistymMessage";
import MessageType from "./messageType/MessageType";
import TypeMessage from "./typeMessage/TypeMessage";
import mesaje from "../../img/mesaje.png";

function News() {
  return (
    <aside className="news">
      <Message />
      <SistymAlert />
      <SistymMessage />
      <MessageType />
      <TypeMessage />
      <div className="img">
        <span>
          <img src={mesaje} alt="" />
        </span>
      </div>
    </aside>
  );
}

export default News;
