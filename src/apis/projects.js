import { authAxios } from 'config/axios.js';
import { PROJECTS_ENDPOINT } from 'constants/api-endpoints';

export const getProjects = async (params = {}) => {
  const response = await authAxios.get(PROJECTS_ENDPOINT, { params });
  return response.data;
};
