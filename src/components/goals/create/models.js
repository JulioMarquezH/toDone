import * as yup from "yup";
import { priorities } from "helpers/priorityMessages";
import { status } from "helpers/statusTasks";

const schema = yup
  .object({
    name: yup.string().required(),
    description: yup.string().required(),
    priority: yup.mixed().required().oneOf(priorities),
    status: yup.mixed().required().oneOf(status),
  })
  .required();

export default schema;
