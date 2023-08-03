import axios from "@utils/axiosInstance";
import { Order } from "@/types";

export const placeOrder = async (orderData: Order): Promise<Order> => {
  try {
    const response = await axios.post<Order>("order", orderData);
    return response.data;
  } catch (error) {
    throw new Error("Failed to add order");
  }
};

export const fetchOrders = async (): Promise<Order[]> => {
  try {
    const response = await axios.get<Order[]>("order");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch orders");
  }
};
