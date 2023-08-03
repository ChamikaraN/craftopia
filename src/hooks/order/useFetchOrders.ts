import { useQuery } from "react-query";
import { toast } from "react-toastify";
import logEvent from "@utils/logger";
import { ERROR, INFO } from "@constants/sanityConst";
import { fetchOrders } from "@services/OrderService";
import { Order } from "@/types";

const useFetchOrders = () => {
  return useQuery<Order[], Error>("fetch-orders", fetchOrders, {
    onSuccess: async (data) => {
      await logEvent(INFO, "Orders Fetched", {
        additionalData: JSON.stringify(data),
      });
    },
    onError: async (error: Error) => {
      toast.error("Failed to fetch orders 😲");
      await logEvent(ERROR, error.message, { additionalData: error.stack });
    },
    staleTime: 10000, // 10 seconds
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
};

export default useFetchOrders;
