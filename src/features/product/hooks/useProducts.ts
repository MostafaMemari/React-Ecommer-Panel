import { useQuery } from "@tanstack/react-query";
import {
  getProductsService,
  getReportPurchaseProductsService,
  getReportSaleProductsService,
  getSettingProductsService,
} from "../../../services/Axios/Request/products";

export function useProducts(params: any) {
  const fetchProducts = () => getProductsService(params).then((res) => res.data);

  return useQuery<any, Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
    enabled: !!params,
    refetchOnWindowFocus: false,
  });
}

export function usePurchaseProducts(params: any) {
  const fetchProducts = () => getReportPurchaseProductsService(params).then((res) => res.data);

  return useQuery<any, Error>({
    queryKey: ["purchase-products"],
    queryFn: fetchProducts,
    enabled: !!params,
    refetchOnWindowFocus: false,
  });
}
export function useSaleProducts(params: any) {
  const fetchProducts = () => getReportSaleProductsService(params).then((res) => res.data);

  return useQuery<any, Error>({
    queryKey: ["sale-products"],
    queryFn: fetchProducts,
    enabled: !!params,
    refetchOnWindowFocus: false,
  });
}
export function useSettingProducts(params: any) {
  const fetchProducts = () => getSettingProductsService(params).then((res) => res.data);

  return useQuery<any, Error>({
    queryKey: ["settings-products"],
    queryFn: fetchProducts,
    enabled: !!params,
    refetchOnWindowFocus: false,
  });
}
