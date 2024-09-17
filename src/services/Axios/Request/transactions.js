import httpService from '../Configs/httpService';

export const transactionsProductService = (productId, data) => {
  return httpService(`/transactions/product/${productId}`, 'post', data);
};
