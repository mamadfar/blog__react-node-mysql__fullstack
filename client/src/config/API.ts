import axios from "axios";
axios.defaults.baseURL = "http://localhost:8800/api";

const API = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default API;
