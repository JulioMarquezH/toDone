import { capitalize } from "helpers/strings";

const PENDING = "pending";
const COMPLETED = "completed";
const CANCELLED = "cancelled";
const IN_PROGRESS = "in_progress";

function statusTasks(status) {
  const isPending = status === PENDING;
  const isCompleted = status === COMPLETED;
  const isCancelled = status === CANCELLED;
  const isInProgress = status === IN_PROGRESS;

  return { isPending, isCompleted, isCancelled, isInProgress };
}

const optionsStatus = [
  { value: PENDING, label: capitalize(PENDING) },
  { value: COMPLETED, label: capitalize(COMPLETED) },
  { value: CANCELLED, label: capitalize(CANCELLED) },
  { value: IN_PROGRESS, label: capitalize(IN_PROGRESS).replace("_", " ") },
];

const status = [PENDING, COMPLETED, CANCELLED, IN_PROGRESS];

export default statusTasks;
export { optionsStatus, status };
export { PENDING, COMPLETED, CANCELLED, IN_PROGRESS };
