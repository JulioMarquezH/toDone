import * as yup from "yup";
import { priorities } from "helpers/priorityMessages";
import { status } from "helpers/statusTasks";

const getSchema = (users, goals) =>
  yup
    .object({
      name: yup.string().required(),
      description: yup.string().required(),
      priority: yup.mixed().required().oneOf(priorities),
      status: yup.mixed().required().oneOf(status),
      assign: yup.mixed().required().oneOf(users),
      belong: yup.mixed().required().oneOf(goals),
    })
    .required();

export default getSchema;
