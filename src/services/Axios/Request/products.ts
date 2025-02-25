import { ProductType } from "../../../features/product/types/enum";
import { FiltersProduct } from "../../../features/product/types/type";
import httpService from "../Configs/httpService";

export interface Filters {
  [key: string]: string | number | boolean | null | undefined;
}

// ProductsResponse

export const getProductsService = (params: any): Promise<any> => {
  return httpService("/products", "GET", null, params);
};

//* remove Service
export const removeProductsService = (productId: number): Promise<any> => {
  return httpService(`/products/${productId}`, "delete");
};

//* Product Report
export const getReportSaleProductsService = (params: any): Promise<any> => {
  return httpService("/products/sale", "GET", null, params);
};

export const getReportPurchaseProductsService = (params: any): Promise<any> => {
  return httpService("/products/purchase", "GET", null, params);
};

// Create Product Service
export const createProductService = async (values: any): Promise<any> => {
  const formData = new FormData();
  if (values.name) formData.append("name", values.name);
  if (values.image) formData.append("image", values.image);
  if (values.price) formData.append("price", parseFloat(values.price).toString());
  if (values.stock) formData.append("stock", parseInt(values.stock, 10).toString());
  if (values.height) formData.append("height", parseFloat(values.height).toString());
  if (values.width) formData.append("width", parseFloat(values.width).toString());
  if (values.dkp) formData.append("dkp", parseInt(values.dkp, 10).toString());
  if (values.dkpc) formData.append("dkpc", parseInt(values.dkpc, 10).toString());
  if (values.sellerId) formData.append("sellerId", parseInt(values.sellerId, 10).toString());
  if (values.categoryId) formData.append("categoryId", parseInt(values.categoryId, 10).toString());
  if (values.colorId) formData.append("colorId", parseInt(values.colorId, 10).toString());

  if (values.status) formData.append("status", values.status);
  if (values.is_robot) formData.append("is_robot", values.is_robot);

  if (values.type) formData.append("type", values.type);

  if (values.type !== ProductType.SINGLE) {
    formData.append("relatedProducts", JSON.stringify(values.relatedProducts));
  }

  return httpService(`/products`, "post", formData);
};

// Update Product Service
export const updateProductService = async (productId: number, values: any): Promise<any> => {
  const formData = new FormData();
  if (values.name) formData.append("name", values.name);
  if (values.image) formData.append("image", values.image);
  if (values.price) formData.append("price", parseFloat(values.price).toString());
  if (values.stock) formData.append("stock", parseInt(values.stock, 10).toString());
  if (values.height) formData.append("height", parseFloat(values.height).toString());
  if (values.width) formData.append("width", parseFloat(values.width).toString());
  if (values.dkp) formData.append("dkp", parseInt(values.dkp, 10).toString());
  if (values.dkpc) formData.append("dkpc", parseInt(values.dkpc, 10).toString());
  if (values.sellerId) formData.append("sellerId", parseInt(values.sellerId, 10).toString());
  if (values.categoryId) formData.append("categoryId", parseInt(values.categoryId, 10).toString());
  if (values.colorId) formData.append("colorId", parseInt(values.colorId, 10).toString());

  if (values.status !== undefined && values.status !== null) {
    formData.append("status", values.status.toString());
  }
  if (values.is_robot !== undefined && values.is_robot !== null) {
    formData.append("is_robot", values.is_robot.toString());
  }

  if (values.type) formData.append("type", values.type);

  if (values.type !== ProductType.SINGLE && !!values?.relatedProducts?.length) {
    formData.append("relatedProducts", JSON.stringify(values.relatedProducts));
  }

  return httpService(`/products/${productId}`, "put", formData);
};

//* Product Settings
export const updateProductSetting = async (productId: number, values: any): Promise<any> => {
  const payload = {
    reduce_price: values.reducePrice ? parseInt(values.reducePrice, 10) : undefined,
    min_price: values.minPrice ? parseInt(values.minPrice, 10) : undefined,
    is_active: Boolean(values.isActive),
    is_buyBox: Boolean(values.isBuyBox),
    is_check_price: Boolean(values.isCheckPrice),
  };

  return httpService(`/products/${productId}/settings`, "patch", payload);
};

export const getSettingProductsService = (params: any): Promise<any> => {
  return httpService("/products/setting", "GET", null, params);
};
