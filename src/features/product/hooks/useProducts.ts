import { useMutation, UseMutationResult, useQuery } from "@tanstack/react-query";
import {
  getProductsService,
  getReportPurchaseProductsService,
  getReportSaleProductsService,
  getSettingProductsService,
} from "../../../services/Axios/Request/products";
import { transactionsProductService } from "../../../services/Axios/Request/transactions";
import { Toast } from "../../../base-components/Toast";
import { AxiosResponse } from "axios";
import { TransactionType } from "../../transaction/types/enym";

// تعریف تایپ‌های ورودی و خروجی
interface TransactionVariables {
  productId: number;
  transactionType: TransactionType;
  quantity: number;
}

interface TransactionResult {
  status: number;
  message: string;
  data?: any;
}

export function useProducts(params: any) {
  const fetchProducts = () => getProductsService(params).then((res) => res.data);

  return useQuery<any, Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
    enabled: false,
    refetchOnWindowFocus: false,
  });
}

export function usePurchaseProducts(params: any) {
  const fetchProducts = () => getReportPurchaseProductsService(params).then((res) => res.data);

  return useQuery<any, Error>({
    queryKey: ["purchase-products"],
    queryFn: fetchProducts,
    enabled: false,
    refetchOnWindowFocus: false,
  });
}
export function useSaleProducts(params: any) {
  const fetchProducts = () => getReportSaleProductsService(params).then((res) => res.data);

  return useQuery<any, Error>({
    queryKey: ["sale-products"],
    queryFn: fetchProducts,
    enabled: false,
    refetchOnWindowFocus: false,
  });
}
export function useSettingProducts(params: any) {
  const fetchProducts = () => getSettingProductsService(params).then((res) => res.data);

  return useQuery<any, Error>({
    queryKey: ["settings-products"],
    queryFn: fetchProducts,
    enabled: false,
    refetchOnWindowFocus: false,
  });
}
