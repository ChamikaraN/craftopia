import axios from "@utils/axiosInstance";
import { Product } from "@/types";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>("product");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};

export const addProduct = async (productData: FormData): Promise<Product> => {
  try {
    const response = await axios.post<Product>("product", productData, {
      headers: {
        "Content-Type": "multipart/form-data", // Set the content type for FormData
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to add product with image");
  }
};

export const deleteProduct = async (id: string): Promise<void> => {
  try {
    await axios.delete(`product/${id}`);
  } catch (error) {
    throw new Error(`Failed to delete product with id ${id}`);
  }
};
