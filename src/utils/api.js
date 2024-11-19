import axios from "axios";
import qs from "query-string";
import { BASE_URL } from "@constants/apiUrls.js";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "en"
  }
});

api.interceptors.request.use(
  (config) => {
    config.url = encodeURI(config.url);
    config.paramsSerializer = {
      serialize: (params) => qs.stringify(params, { arrayFormat: "repeat" })
    };

    return config;
  },
  (err) => Promise.reject(err)
);

api.interceptors.response.use(
  (res) => res.data.data,
  (err) => Promise.reject(err)
);

export const setAuthHeader = (token) => {
  api.defaults.headers.common.authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  api.defaults.headers.common.authorization = "";
};

export default api;
