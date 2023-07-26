import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import logEvent from "@utils/logger";
import { ERROR, INFO } from "@constants/sanityConst";
import { Category } from "@/types";

import { addCategory } from "@services/CategoryService";

const useAddCategory = () => {
  const queryClient = useQueryClient();

  return useMutation<Category, Error, Category>(addCategory, {
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

export default useAddCategory;
