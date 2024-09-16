import httpService from '../Configs/httpService';

export const getProductsService = (page, limit, search) => {
  return httpService(`/products?page=${page}&limit=${limit}&search=${search}`, 'get');
};
