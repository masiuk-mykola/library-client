import axios from 'axios';
import qs from 'query-string';
import { BASE_URL } from '@constants/apiUrls.js';
import helpers from '@utils/helpers.js';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept-Language': 'en'
  }
});

api.interceptors.request.use(
  (config) => {
    const token = helpers.gerToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.url = encodeURI(config.url);

    config.paramsSerializer = (params) =>
      qs.stringify(params, { arrayFormat: 'repeat' });

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (res) => res.data.data,
  (err) => Promise.reject(err)
);

export const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = '';
};

export default api;
