import { authAxios } from 'config/axios.js';
import { TASKS_ENDPOINT } from 'constants/api-endpoints';

export const getTasks = async (params = {}) => {
  const response = await authAxios.get(TASKS_ENDPOINT, { params });
  return response.data;
};
