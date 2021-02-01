import axios from "axios";

const authConfig = {
  headers: { authorization: localStorage.getItem("token") },
  baseURL: "", //need to get the api address to attach here for base url setup
};

export const axiosWithAuth = (config = authConfig) => {
  return axios.create(config);
};
