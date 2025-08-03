export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/authentication/login/',
    LOGOUT: '/api/authentication/logout/',
    REFRESH: '/api/authentication/refresh/',
  },
};

// AUTHENTICATION ENDPOINTS
const AUTHENTICATION_ENDPOINT = '/api/authentication/';
export const LOGIN_ENDPOINT = `${AUTHENTICATION_ENDPOINT}login/`;
export const LOGOUT_ENDPOINT = `${AUTHENTICATION_ENDPOINT}logout/`;
export const REFRESH_ENDPOINT = `${AUTHENTICATION_ENDPOINT}refresh/`;
