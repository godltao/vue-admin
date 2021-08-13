import axios from "axios";

//default config
axios.defaults.timeout = 5000
axios.defaults.headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
}

//create instance
const axiosInstance = axios.create({
  timeout: 5000,
  baseURL: "/api"
});

//filter
axiosInstance.interceptors.request.use(config => {
  config.withCredentials = true;
  return config;
})

export default function axiosRequest(config) {
  return axiosInstance(config)
}
