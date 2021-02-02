import axios from "axios";

const authConfig = {
  headers: { Authorization: localStorage.getItem("token") },
  baseURL: "https://food-truck-back-end-lambda.herokuapp.com", //need to get the api address to attach here for base url setup
};

export const axiosWithAuth = (config = authConfig) => {
  return axios.create(config);
};
