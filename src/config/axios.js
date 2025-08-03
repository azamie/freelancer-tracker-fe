import axios from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';
import settings from 'config/settings.js';
import { refreshToken } from 'apis/authentication.js';
import { isTokenExpiring } from 'utils/authentication';

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
  withCredentials: true,
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

const authRequestInterceptor = async (config) => {
  if (isTokenExpiring(5, 'access') && !isTokenExpiring(0, 'refresh')) {
    try {
      const response = await refreshToken();
      if (response.accessTokenExpiresAt) {
        localStorage.setItem(
          'accessTokenExpiresAt',
          response.accessTokenExpiresAt,
        );
      }
      if (response.refreshTokenExpiresAt) {
        localStorage.setItem(
          'refreshTokenExpiresAt',
          response.refreshTokenExpiresAt,
        );
      }
    } catch (error) {
      console.error('Token refresh failed:', error);
      localStorage.removeItem('accessTokenExpiresAt');
      localStorage.removeItem('refreshTokenExpiresAt');
      window.location.href = '/login';
    }
  }

  return decamelizeKeysRequest(config);
};

authAxios.interceptors.request.use(authRequestInterceptor);
authAxios.interceptors.response.use(camelizeKeysResponse, camelizeKeysError);
