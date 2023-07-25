import axios from "../utils/axiosInstance";
import { Product } from "../types";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>("product");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch employees");
  }
};
