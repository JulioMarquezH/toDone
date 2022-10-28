import clsx from "clsx";
import ItemBlock from "../item";
import "./styles.css";

const nameTaskCompletd = [
  {
    nameTask: "Evaluate the addition and deletion of user IDs.",
    status: "Pending",
    priority: "Minor",
    asignates: [
      {
        name: "juan",
        avatar: "xxx",
      },
    ],
  },
  {
    nameTask: "Identify the implementation team.",
    status: "In Progress",
    priority: "Normal",
    asignates: [
      {
        name: "juan",
        avatar: "xxx",
      },
    ],
  },
  {
    nameTask: "afafasfa",
    status: "Pending",
    priority: "Critical",
    asignates: [
      {
        name: "juan",
        avatar: "xxx",
      },
    ],
  },
];
let numberItem;
function ListBlock({ isUser, isCompleted, handleClick }) {
  numberItem = nameTaskCompletd.length - 1;
  return (
    <div
      className={clsx(!isCompleted && "list-task", isCompleted && "opacity")}
    >
      {nameTaskCompletd.map((item, index) => {
        const isLine = numberItem === index;
        const props = { ...item, isLine, isUser, handleClick };
        return <ItemBlock key={index} {...props} />;
      })}
    </div>
  );
}

export default ListBlock;
