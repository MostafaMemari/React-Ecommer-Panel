import httpService from '../Configs/httpService';

export const transactionsProductService = (productId, data) => {
  return httpService(`/transactions/product/${productId}`, 'post', data);
};
export const getTransactionsProductService = (page, limit) => {
  return httpService(`/transactions?page=${page}&limit=${limit}`, 'get');
};
