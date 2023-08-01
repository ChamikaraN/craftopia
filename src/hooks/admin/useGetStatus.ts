import { useQuery } from "react-query";
import { toast } from "react-toastify";
import logEvent from "@utils/logger";
import { ERROR, INFO } from "@constants/sanityConst";
import { fetchStatus } from "@services/AdminService";
import { AdminStatus } from "@/types";

const useGetStatus = () => {
  return useQuery<AdminStatus, Error>("fetch-status", fetchStatus, {
    onSuccess: async (data) => {
      await logEvent(INFO, "Status Fetched", {
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

export default useGetStatus;
