import axios from "axios";

const baseURL = "http://localhost:1337/api/v1";
const _headers = {
  "Content-Type": "application/json",
};
const mutation = (token) => {
  const headers = token
    ? { ..._headers, authorization: `Bearer ${token}` }
    : { ..._headers };
  return axios.create({
    baseURL,
    headers,
  });
};

export default mutation;
