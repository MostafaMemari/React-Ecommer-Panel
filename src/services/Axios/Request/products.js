import httpService from '../Configs/httpService';

export const getProductsService = (page, limit, search) => {
  return httpService(`/products?page=${page}&limit=${limit}&search=${search}`, 'get');
};

//* Product Report
export const getReportSaleProductsService = (page, limit, search) => {
  return httpService(`/products/sale?page=${page}&limit=${limit}&search=${search}`, 'get');
};
export const getReportPurchaseProductsService = (page, limit, search) => {
  return httpService(`/products/purchase?page=${page}&limit=${limit}&search=${search}`, 'get');
};

//* Product Setting
export const createSettingProductsService = (prodcutId, values) => {
  return httpService(`/products/${prodcutId}/settings`, 'patch', values);
};

export const getSettingProductsService = (page, limit, search) => {
  return httpService(`/products/setting?page=${page}&limit=${limit}&search=${search}`, 'get');
};

export const createProductService = async (values) => {
  const formData = new FormData();

  if (values.name) formData.append('name', values.name);
  if (values.price) formData.append('price', parseFloat(values.price));
  if (values.quantity) formData.append('quantity', parseInt(values.quantity, 10));
  if (values.width) formData.append('width', parseFloat(values.width));
  if (values.height) formData.append('height', parseFloat(values.height));
  if (values.dkp) formData.append('dkp', parseInt(values.dkp, 10));
  if (values.dkpc) formData.append('dkpc', parseInt(values.dkpc, 10));
  if (values.sellerId) formData.append('sellerId', parseInt(values.sellerId, 10));
  if (values.categoryId) formData.append('categoryId', parseInt(values.categoryId, 10));
  if (values.colorId) formData.append('colorId', parseInt(values.colorId, 10));
  formData.append('status', true);
  if (values.image) formData.append('image', values.image);

  return httpService(`/products`, 'post', formData, 'multipart/form-data');
};
