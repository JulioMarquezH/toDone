import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import TaskBlock from "./components/taskBlock/TasksBlock";
import News from "./components/news/News";

function App() {
  return (
    <div className="container">
      <NavBar />
      <div className="contents">
        <main>
          <TaskBlock />
        </main>
        <News />
      </div>
    </div>
  );
}

export default App;

/*<section className="guide">
          <div>
            <section className="task-flex">
              <img src="./img/Ellipse1.png" alt="" />
              <p className="">Minor</p>
            </section>
            <section className="task-flex">
              <img src="./img/Ellipse2.png" alt="" />
              <p className="">Normal</p>
            </section>
            <section className="task-flex">
              <img src="./img/Ellipse3.png" alt="" />
              <p className="">Critical</p>
            </section>
          </div>
          <div>
            <section className="task-state-Pending on">
              <p>Pending</p>
            </section>
            <section className="task-state-InPending on">
              <p>InProgress</p>
            </section>
            <section className="task-state-cancelled on">
              <p>Cancelled</p>
            </section>
          </div>
        </section>*/

/*

<aside className="news">
<section>
  <div className="face">
    <img src="./img/user2.png" alt="" />
    <address>
      <section className="profile">
        <p className="profile-name">Alena Curtis</p>
        <p>- Just Now</p>
      </section>
      <p>
        Planning for new event at Sydney room for new project on
        <strong className="time">14:00 PM</strong>
      </p>
    </address>
  </div>
</section>
<section className="sistym-alert">
  <section className="square">
    <p className="send">
      Your message to <strong className="">Leo Dias</strong> has been
      sent.
    </p>
    <p>- Just Now</p>
  </section>
  <p>
    Planning for new event at Sydney room for new project on coming
    week.
  </p>
</section>
<section className="sistym-message">
  <section className="square">
    <div>
      <p className="send">System message</p>
      <p>- Just Now</p>
    </div>
    <img src="./img/Vector.png" alt="" />
  </section>
  <p className="please">Please update your profile</p>
</section>
<section>
  <div className="face">
    <img src="./img/user3.png" alt="" />
    <address>
      <section className="profile">
        <p className="profile-name">Alena Curtis</p>
        <p>1 hour ago</p>
      </section>
      <p>
        Attached new design file to
        <strong className="flow">Userflow</strong>
      </p>
    </address>
  </div>
</section>
<div className="img">
  <span>
    <img src="./img/zip.png" alt="" className="img-zip" />
  </span>
  <img src="./img/icon2.png" alt="" className="" />
</div>
<section>
  <div className="face">
    <img src="./img/user4.png" alt="" />
    <address>
      <section className="profile">
        <p className="profile-name">Chance Rhiel Madsen</p>
        <p>2 hour ago</p>
      </section>
      <p>
        Comment on your task
        <strong className="ui">UI Design</strong>
      </p>
    </address>
  </div>
</section>
<div className="img">
  <span>
    <img src="./img/mesaje.png" alt="" />
  </span>
</div>
</aside>
*/
