import axios from "axios";

const baseURL = "http://localhost:1337/api/v1";
const headers = {
  "Content-Type": "application/json",
};
const API = axios.create({
  baseURL,
  headers,
});

export default API;
