import { authAxios } from 'config/axios.js';

export const getUserMe = async () => {
  const response = await authAxios.get('/api/users/me');
  return response.data;
};

export const getUserSummary = async () => {
  const response = await authAxios.get('/api/users/me/summary/');
  return response.data;
};
