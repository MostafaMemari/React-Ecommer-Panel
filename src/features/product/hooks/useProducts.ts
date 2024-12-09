import { useQuery } from "@tanstack/react-query";
import { getProductsService } from "../../../services/Axios/Request/products";

export function useProducts() {
  return useQuery<any, Error>({
    queryKey: ["products"],
    queryFn: () => getProductsService().then((res) => res.data),
  });
}
