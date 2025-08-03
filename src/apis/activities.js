import { authAxios } from 'config/axios.js';
import { ACTIVITIES_ENDPOINT } from 'constants/api-endpoints';

export const getActivities = async (params = {}) => {
  const response = await authAxios.get(ACTIVITIES_ENDPOINT, { params });
  return response.data;
};
