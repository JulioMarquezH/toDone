import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirm: yup.string().required(),
  })
  .required();

export default schema;
