import { TransactionType } from "../../../features/transaction/types/enym";
import httpService from "../Configs/httpService";

export const transactionsProductService = (productId: number, transactionType: TransactionType, data: any) => {
  return httpService(`/transactions/product/${productId}/${transactionType}`, "post", data);
};
export const getTransactionsProductService = (page: string, limit: string) => {
  return httpService(`/transactions?page=${page}&limit=${limit}`, "get");
};
