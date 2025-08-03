import { authAxios } from 'config/axios.js';
import { INVOICES_ENDPOINT } from 'constants/api-endpoints';

export const getInvoices = async (params = {}) => {
  const response = await authAxios.get(INVOICES_ENDPOINT, { params });
  return response.data;
};
