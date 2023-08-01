import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import logEvent from "@utils/logger";
import { ERROR, INFO } from "@constants/sanityConst";
import { Order } from "@/types";

import { placeOrder } from "@services/OrderService";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/redux/hooks";
import { clearCart } from "@/redux/Cart/cartSlice";

export const usePlaceOrder = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return useMutation<Order, Error, Order>(placeOrder, {
    onSuccess: async (data) => {
      queryClient.invalidateQueries("fetch-categories");
      queryClient.invalidateQueries("fetch-products");
      toast.success("Order placed successfully 👌");
      await logEvent(INFO, "Order Added", {
        additionalData: JSON.stringify(data),
      });
      dispatch(clearCart());
      navigate("/");
    },
    onError: async (error: Error) => {
      toast.error("Failed to place your order 😲");
      await logEvent(ERROR, error.message, { additionalData: error.stack });
    },
  });
};
