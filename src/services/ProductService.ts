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
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to add product");
  }
};

export const editProduct = async (productData: FormData): Promise<Product> => {
  try {
    const response = await axios.put<Product>(
      `product/${productData.get("id")}`,
      productData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to edit product");
  }
};

export const deleteProduct = async (id: string): Promise<void> => {
  try {
    await axios.delete(`product/${id}`);
  } catch (error) {
    throw new Error(`Failed to delete product with id ${id}`);
  }
};

export const getProduct = async (id: string): Promise<Product> => {
  try {
    const response = await axios.get(`product/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get product with id ${id}`);
  }
};
