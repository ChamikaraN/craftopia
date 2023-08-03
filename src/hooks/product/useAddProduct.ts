import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import logEvent from "@utils/logger";
import { ERROR, INFO } from "@constants/sanityConst";
import { Product } from "@/types";
import { useNavigate } from "react-router-dom";
import { addProduct } from "@/services/ProductService";

const useAddProduct = () => {
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

export default useAddProduct;
