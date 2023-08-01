import { CartItem } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const CART_LOCAL_STORAGE_KEY = "cartItems";
const TOTAL_AMOUNT_LOCAL_STORAGE_KEY = "totalAmount";

// Load cart items from local storage or return an empty array if not found
const loadCartItemsFromLocalStorage = (): CartItem[] => {
  const cartItemsJson = localStorage.getItem(CART_LOCAL_STORAGE_KEY);
  return cartItemsJson ? JSON.parse(cartItemsJson) : [];
};

// Load total amount from local storage or return 0 if not found
const loadTotalAmountFromLocalStorage = (): number => {
  const totalAmountJson = localStorage.getItem(TOTAL_AMOUNT_LOCAL_STORAGE_KEY);
  return totalAmountJson ? parseInt(totalAmountJson, 10) : 0;
};

const saveCartItemsToLocalStorage = (cartItems: CartItem[]) => {
  localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(cartItems));
};

const saveTotalAmountToLocalStorage = (totalAmount: number) => {
  localStorage.setItem(TOTAL_AMOUNT_LOCAL_STORAGE_KEY, totalAmount.toString());
};

export interface CartState {
  cartItems: CartItem[];
  totalAmount: number;
}

const initialState: CartState = {
  cartItems: loadCartItemsFromLocalStorage(),
  totalAmount: loadTotalAmountFromLocalStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
      saveCartItemsToLocalStorage(state.cartItems);
      saveTotalAmountToLocalStorage(state.totalAmount);
    },
    addItem: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.productId === item.productId
      );

      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, increase the quantity
        state.cartItems[existingItemIndex].amount += item.amount;
        toast.success(
          `${state.cartItems[existingItemIndex].amount} - ${item.name} added to cart`
        );
      } else {
        // If the item is new, add it to the cartItems array
        state.cartItems.push(item);
        toast.success(`${item.name} added to cart`);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, cartItem) => total + cartItem.amount * cartItem.price,
        0
      );
      saveCartItemsToLocalStorage(state.cartItems);
      saveTotalAmountToLocalStorage(state.totalAmount);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.productId !== productId
      );

      // Update totalAmount whenever an item is removed
      state.totalAmount = state.cartItems.reduce(
        (total, cartItem) => total + cartItem.amount * cartItem.price,
        0
      );
      saveCartItemsToLocalStorage(state.cartItems);
      saveTotalAmountToLocalStorage(state.totalAmount);
    },
    increase: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const cartItem = state.cartItems.find(
        (item) => item.productId === productId
      );
      if (cartItem) {
        cartItem.amount += 1;
      }

      // Update totalAmount whenever an item's quantity is increased
      state.totalAmount = state.cartItems.reduce(
        (total, cartItem) => total + cartItem.amount * cartItem.price,
        0
      );
      saveCartItemsToLocalStorage(state.cartItems);
      saveTotalAmountToLocalStorage(state.totalAmount);
    },
    decrease: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const cartItem = state.cartItems.find(
        (item) => item.productId === productId
      );
      if (cartItem && cartItem.amount > 1) {
        cartItem.amount -= 1;
      }

      state.totalAmount = state.cartItems.reduce(
        (total, cartItem) => total + cartItem.amount * cartItem.price,
        0
      );
      saveCartItemsToLocalStorage(state.cartItems);
      saveTotalAmountToLocalStorage(state.totalAmount);
    },
  },
});

export const { clearCart, addItem, removeItem, increase, decrease } =
  cartSlice.actions;

export default cartSlice.reducer;
