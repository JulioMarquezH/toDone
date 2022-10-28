const ALERT = "alert";
const MESSAGE = "message";
const NOTIFICATION = "notification";

function typeNews(type) {
  const isAlert = type === ALERT;
  const isMessage = type === MESSAGE;
  const isNotification = type === NOTIFICATION;

  return { isAlert, isMessage, isNotification };
}

export default typeNews;
export { ALERT, NOTIFICATION, MESSAGE };
