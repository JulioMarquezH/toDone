import axios from "axios";

const _headers = {
  "Content-Type": "application/json",
};
const validateStatus = (status) => status >= 200 && status < 400;
const query = (url, params, token) => {
  const headers = token
    ? { ..._headers, authorization: `Bearer ${token}` }
    : { ..._headers };
  return axios
    .get(`http://localhost:1337/api/v1${url}`, {
      headers,
      params,
      validateStatus,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));
};

export default query;
