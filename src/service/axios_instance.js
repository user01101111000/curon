import axios from "axios";

function getConvertAxiosInstance() {
  return axios.create({
    baseURL: `https://v6.exchangerate-api.com/v6/${
      import.meta.env.VITE_API_KEY
    }/latest`,
  });
}

function getCurrenciesAxiosInstance() {
  return axios.create({
    baseURL: `https://v6.exchangerate-api.com/v6/${
      import.meta.env.VITE_API_KEY
    }/codes`,
  });
}

export { getConvertAxiosInstance, getCurrenciesAxiosInstance };
