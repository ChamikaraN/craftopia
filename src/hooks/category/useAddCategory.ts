import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import logEvent from "@utils/logger";
import { ERROR, INFO } from "@constants/sanityConst";
import { Category } from "@/types";

import { addCategory, editCategory } from "@services/CategoryService";
import { useNavigate } from "react-router-dom";

export const useAddCategory = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation<Category, Error, FormData>(addCategory, {
    onSuccess: async (data) => {
      queryClient.invalidateQueries("fetch-categories");
      toast.success("Category added successfully 👌");
      await logEvent(INFO, "Category Added", {
        additionalData: JSON.stringify(data),
      });
      navigate("/admin/categories");
    },
    onError: async (error: Error) => {
      toast.error("Failed to add category 😲");
      await logEvent(ERROR, error.message, { additionalData: error.stack });
    },
  });
};

export const useEditCategory = () => {
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
