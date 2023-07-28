import axios from "@utils/axiosInstance";
import { Category } from "@/types";

export const addCategory = async (
  categoryData: FormData
): Promise<Category> => {
  try {
    const response = await axios.post<Category>("category", categoryData, {
      headers: {
        "Content-Type": "multipart/form-data", // Set the content type for FormData
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to add category with image");
  }
};

export const editCategory = async (
  categoryData: Category
): Promise<Category> => {
  try {
    const response = await axios.post<Category>("category", categoryData);
    return response.data;
  } catch (error) {
    throw new Error("Failed to add category");
  }
};

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await axios.get<Category[]>("category");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch categories");
  }
};

export const deleteCategory = async (id: string): Promise<void> => {
  try {
    await axios.delete(`category/${id}`);
  } catch (error) {
    throw new Error(`Failed to delete category with id ${id}`);
  }
};
