import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import logEvent from "@utils/logger";
import { ERROR } from "@constants/sanityConst";
import { deleteProduct } from "@services/ProductService";

const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>((id) => deleteProduct(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("fetch-products");
      toast.success("Product status changed successfully 👌");
    },
    onError: async (error) => {
      toast.error("Failed to change status product 😲");
      await logEvent(ERROR, error.message, { additionalData: error.stack });
    },
  });
};

export default useDeleteProduct;
