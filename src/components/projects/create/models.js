import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required(),
    description: yup.string().required(),
    start: yup.date().min(new Date()),
    end: yup.date(),
  })
  .required();

export default schema;
