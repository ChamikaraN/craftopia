import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import logEvent from "@utils/logger";
import { ERROR } from "@constants/sanityConst";
import { deleteCategory } from "@services/CategoryService";

const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>((id) => deleteCategory(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("fetch-categories");
      toast.success("Category deleted successfully 👌");
    },
    onError: async (error) => {
      toast.error("Failed to delete category 😲");
      await logEvent(ERROR, error.message, { additionalData: error.stack });
    },
  });
};

export default useDeleteCategory;
