import { useQuery } from "react-query";
import { toast } from "react-toastify";
import logEvent from "@utils/logger";
import { ERROR, INFO } from "@constants/sanityConst";
import { getProduct } from "@services/ProductService";
import { Product } from "@/types";

const useFetchProduct = (id: string) => {
  const { data, isLoading } = useQuery<Product, Error>(
    ["fetch-product", id], // Use an array to set the dynamic key
    () => getProduct(id),
    {
      onSuccess: async (data) => {
        await logEvent(INFO, "Product Fetched", {
          additionalData: JSON.stringify(data),
        });
      },
      onError: async (error: Error) => {
        toast.error("Failed to fetch product 😲");
        await logEvent(ERROR, error.message, { additionalData: error.stack });
      },
      staleTime: 10000, // 10 seconds
      refetchOnMount: true,
      refetchOnWindowFocus: false,
    }
  );

  return { data, isLoading }; // Return both the product data and loading state
};

export default useFetchProduct;
