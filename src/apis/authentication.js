import { publicAxios } from 'config/axios.js';
import { LOGIN_ENDPOINT } from 'constants/api-endpoints.js';

export const loginUser = async (credentials) => {
  const response = await publicAxios.post(LOGIN_ENDPOINT, credentials);
  return response.data;
};
