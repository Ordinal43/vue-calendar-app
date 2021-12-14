import axios from "axios";

const BASE_URL = "http://localhost:3000";
axios.defaults.baseURL = BASE_URL;

const config = {
  baseURL: BASE_URL
};

const httpClient = axios.create(config);

httpClient.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    console.log(error);
  }
);

export default httpClient;
