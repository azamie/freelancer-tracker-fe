import axios from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';
import settings from 'config/settings.js';

const decamelizeKeysRequest = (config) => {
  if (config.data) {
    config.data = decamelizeKeys(config.data);
  }
  if (config.params) {
    config.params = decamelizeKeys(config.params);
  }
  return config;
};

const camelizeKeysResponse = (response) => {
  if (response.data) {
    response.data = camelizeKeys(response.data);
  }
  return response;
};

const camelizeKeysError = (error) => {
  if (error.response && error.response.data) {
    error.response.data = camelizeKeys(error.response.data);
  }
  return Promise.reject(error);
};

export const publicAxios = axios.create({
  baseURL: settings.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

publicAxios.interceptors.request.use(decamelizeKeysRequest);
publicAxios.interceptors.response.use(camelizeKeysResponse, camelizeKeysError);

export const authAxios = axios.create({
  baseURL: settings.apiBaseUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

authAxios.interceptors.request.use(decamelizeKeysRequest);
authAxios.interceptors.response.use(camelizeKeysResponse, camelizeKeysError);
