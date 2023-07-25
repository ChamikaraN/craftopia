import { useQuery } from "react-query";
import { toast } from "react-toastify";
import logEvent from "@utils/logger";
import { ERROR, INFO } from "@constants/sanityConst";
import { fetchProducts } from "@services/ProductService";
import { Product } from "@/types";
import { useAppDispatch } from "@redux/hooks";
import { loadProducts } from "@redux/Product/productSlice";

const useFetchProducts = () => {
  const dispatch = useAppDispatch();
  return useQuery<Product[], Error>("fetch-products", fetchProducts, {
    onSuccess: async (data) => {
      dispatch(loadProducts(data));
      await logEvent(INFO, "Products Fetched", {
        additionalData: JSON.stringify(data),
      });
    },
    onError: async (error: Error) => {
      toast.error("Failed to fetch products 😲");
      await logEvent(ERROR, error.message, { additionalData: error.stack });
    },
    staleTime: 10000, // 10 seconds
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
};

export default useFetchProducts;
