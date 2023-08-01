import { AdminStatus, Product } from "@/types";
import axios from "@utils/axiosInstance";

export const fetchStatus = async (): Promise<AdminStatus> => {
  try {
    const response = await axios.get<AdminStatus>("dashboard/status");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};

export const fetchTopSelling = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>(
      "dashboard/bestSellingProducts"
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};
