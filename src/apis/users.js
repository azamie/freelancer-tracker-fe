import { authAxios } from 'config/axios.js';

export const getUserMe = async () => {
  const response = await authAxios.get('/api/users/me');
  return response.data;
};
