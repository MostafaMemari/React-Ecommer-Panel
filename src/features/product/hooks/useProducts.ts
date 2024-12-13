import { useQuery } from "@tanstack/react-query";
import { getProductsService } from "../../../services/Axios/Request/products";

export function useProducts(params: any) {
  const fetchProducts = () => getProductsService(params).then((res) => res.data);

  return useQuery<any, Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
    enabled: !!params,
    refetchOnWindowFocus: false,
  });
}
