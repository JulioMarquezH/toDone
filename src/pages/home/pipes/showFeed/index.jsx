import clsx from "clsx";
import Alert from "../../../../components/news/alert";
import Notification from "../../../../components/news/notification";
import priorityMessages from "helpers/priorityMessages";
import typeNews from "helpers/typeNews";

function PipeShowFeed({
  image,
  name,
  priority,
  time,
  action,
  to,
  content,
  type,
}) {
  const { isMinor, isNormal, isMayor, isCritical } = priorityMessages(priority);
  const { isAlert, isMessage, isNotification } = typeNews(type);
  if (isMessage) {
    return (
      <section className="face">
        <img src={image} alt="" className="image-face" />
        <article>
          <header className="profile">
            <p className="profile-name">
              {name}
              <span className="profile-text">{` ${time}`}</span>
            </p>
          </header>
          <main className="face-text">
            {action}
            <strong
              className={clsx(
                isCritical && "time",
                isNormal && "flow",
                isMayor && "ui",
                isMinor && "space"
              )}
            >
              {` ${to}`}
            </strong>
          </main>
        </article>
      </section>
    );
  }
  return (
    <section className={clsx(isAlert && "alert", isNotification && "message")}>
      {isAlert && <Alert action={action} name={name} time={time} to={to} />}
      {isNotification && <Notification action={action} time={time} />}
      <main
        className={clsx(isAlert && "alert-text", isNotification && "please")}
      >
        {content}
      </main>
    </section>
  );
}

export default PipeShowFeed;
