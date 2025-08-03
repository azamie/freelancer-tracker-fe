import { authAxios, publicAxios } from 'config/axios.js';
import {
  LOGIN_ENDPOINT,
  LOGOUT_ENDPOINT,
  REFRESH_ENDPOINT,
} from 'constants/api-endpoints.js';

export const loginUser = async (credentials) => {
  const response = await publicAxios.post(LOGIN_ENDPOINT, credentials);
  return response.data;
};

export const logoutUser = async () => {
  const response = await authAxios.post(LOGOUT_ENDPOINT);
  return response.data;
};

export const refreshToken = async () => {
  const response = await authAxios.post(REFRESH_ENDPOINT);
  return response.data;
};
