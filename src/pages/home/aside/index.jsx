import "./styles.css";
import PipeShowFeed from "pages/home/pipes/showFeed";

import user2 from "images/user2.png";
import user3 from "images/user3.png";
import user4 from "images/user4.png";
import { ALERT, NOTIFICATION, MESSAGE } from "helpers/typeNews";
import { MINOR, MAYOR, NORMAL, CRITICAL } from "helpers/priorityMessages";
import { nanoid } from "nanoid";

const messageList = [
  {
    image: user2,
    name: "Chance Rhiel Madsen",
    time: "2 hour ago",
    action: "Comment on your task",
    to: "UI Design",
    priority: MAYOR,
    content: null,
    type: MESSAGE,
  },
  {
    image: null,
    name: "Leo Dias",
    time: "Just Now",
    action: "Your message to",
    to: "has been sent.",
    priority: null,
    content:
      "Planning for new event at Sydney room for new project on coming week.",
    type: ALERT,
  },
  {
    image: user3,
    name: "Alena Curtis",
    time: "1 hour ago",
    action: "Attached new design file to",
    to: "Userflow",
    priority: NORMAL,
    content: null,
    type: MESSAGE,
  },
  {
    image: null,
    name: "",
    time: "Just Now",
    action: "System message",
    to: "",
    priority: null,
    content: null,
    type: NOTIFICATION,
  },
  {
    image: user4,
    name: "Alena Curtis",
    time: "Just Now",
    action: "Planning for new event at Sydney room for new project on",
    to: "14:00 PM",
    priority: CRITICAL,
    content: null,
    type: MESSAGE,
  },
  {
    image: user2,
    name: "Chance Madsen",
    time: "1 hour ago",
    action: "Comment on your goal",
    to: "UI Design",
    priority: MINOR,
    content: null,
    type: MESSAGE,
  },
];

function Aside() {
  return (
    <aside className="news">
      {messageList.map((message) => {
        const key = nanoid();
        return <PipeShowFeed key={key} {...message} />;
      })}
    </aside>
  );
}

export default Aside;
