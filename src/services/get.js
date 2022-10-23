import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};
const validateStatus = (status) => status >= 200 && status < 400;
const get = (url, params) =>
  axios
    .get(`http://localhost:1337/api/v1${url}`, {
      headers,
      params,
      validateStatus,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));

export default get;
// if(res.data.data.length >0)
