import { capitalize } from "helpers/strings";

const MINOR = "minor";
const MAYOR = "major";
const NORMAL = "normal";
const CRITICAL = "critical";

function priorityMessages(priority) {
  const isMinor = priority === MINOR;
  const isMayor = priority === MAYOR;
  const isNormal = priority === NORMAL;
  const isCritical = priority === CRITICAL;

  return { isMinor, isNormal, isMayor, isCritical };
}

const optionsPriority = [
  { value: MINOR, label: capitalize(MINOR) },
  { value: MAYOR, label: capitalize(MAYOR) },
  { value: NORMAL, label: capitalize(NORMAL) },
  { value: CRITICAL, label: capitalize(CRITICAL) },
];

const priorities = [MINOR, MAYOR, NORMAL, CRITICAL];

export default priorityMessages;
export { optionsPriority, priorities };
export { MINOR, MAYOR, NORMAL, CRITICAL };
