import { useQuery } from "react-query";
import { toast } from "react-toastify";
import logEvent from "@utils/logger";
import { ERROR, INFO } from "@constants/sanityConst";
import { fetchTopSelling } from "@services/AdminService";
import { Product } from "@/types";

const useGetTopSellingProducts = () => {
  return useQuery<Product[], Error>("fetch-top-selling", fetchTopSelling, {
    onSuccess: async (data) => {
      await logEvent(INFO, "Top Selling Fetched", {
        additionalData: JSON.stringify(data),
      });
    },
    onError: async (error: Error) => {
      toast.error("Failed to fetch top selling 😲");
      await logEvent(ERROR, error.message, { additionalData: error.stack });
    },
    staleTime: 10000, // 10 seconds
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
};

export default useGetTopSellingProducts;
