import { Seller } from "../../../features/sellers/types/type";
import httpService from "../Configs/httpService";

//* Category Service
export const getSellersService = (): Promise<any> => {
  return httpService(`/sellers`, "get");
};

export const createSellersService = (values: Seller): Promise<any> => {
  const payload = {
    name: values.name ? values.name : undefined,
    seller_id: values.seller_id ? values.seller_id : undefined,
    email: values.email ? values.email : undefined,
    phone: values.phone ? values.phone : undefined,
  };
  return httpService(`/sellers`, "post", payload);
};

export const removeSellerService = (colorId: number): Promise<any> => {
  return httpService(`/sellers/${colorId}`, "delete");
};

export const updateSellerService = (colorId: number, values: Seller): Promise<any> => {
  const payload = {
    name: values.name ? values.name : undefined,
    seller_id: values.seller_id ? values.seller_id : undefined,
    email: values.email ? values.email : undefined,
    phone: values.phone ? values.phone : undefined,
  };

  return httpService(`/sellers/${colorId}`, "put", payload);
};
