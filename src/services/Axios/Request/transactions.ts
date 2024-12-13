import { TransactionType } from "../../../features/transaction/types/enym";
import httpService from "../Configs/httpService";

export const transactionsProductService = (productId: number, transactionType: TransactionType, data: any) => {
  return httpService(`/transactions/product/${productId}/${transactionType}`, "post", data);
};
export const getTransactionsProductService = (params: any) => {
  return httpService(`/transactions`, "get", null, params);
};
