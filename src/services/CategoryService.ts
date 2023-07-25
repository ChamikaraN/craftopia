import axios from "@utils/axiosInstance";
import { Category } from "@/types";

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await axios.get<Category[]>("category");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch categories");
  }
};
