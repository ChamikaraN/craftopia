import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import logEvent from "@utils/logger";
import { ERROR, INFO } from "@constants/sanityConst";
import { Category, Product } from "@/types";

import { editCategory } from "@services/CategoryService";
import { useNavigate } from "react-router-dom";
import { addProduct } from "@/services/ProductService";

export const useAddProduct = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation<Product, Error, FormData>(addProduct, {
    onSuccess: async (data) => {
      queryClient.invalidateQueries("fetch-products");
      toast.success("Product added successfully 👌");
      await logEvent(INFO, "Product Added", {
        additionalData: JSON.stringify(data),
      });
      navigate("/admin/products");
    },
    onError: async (error: Error) => {
      toast.error("Failed to add product 😲");
      await logEvent(ERROR, error.message, { additionalData: error.stack });
    },
  });
};

export const useEditProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<Category, Error, Category>(editCategory, {
    onSuccess: async (data) => {
      queryClient.invalidateQueries("fetch-categories");
      toast.success("Category added successfully 👌");
      await logEvent(INFO, "Category Added", {
        additionalData: JSON.stringify(data),
      });
    },
    onError: async (error: Error) => {
      toast.error("Failed to add category 😲");
      await logEvent(ERROR, error.message, { additionalData: error.stack });
    },
  });
};
