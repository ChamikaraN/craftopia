import { CartItem } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  cartItems: CartItem[];
  totalAmount: number;
}

const initialState: CartState = {
  cartItems: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    addItem: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.productId === item.productId
      );

      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, increase the quantity
        state.cartItems[existingItemIndex].amount += item.amount;
      } else {
        // If the item is new, add it to the cartItems array
        state.cartItems.push(item);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, cartItem) => total + cartItem.amount * cartItem.price,
        0
      );
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
    },
    decrease: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const cartItem = state.cartItems.find(
        (item) => item.productId === productId
      );
      if (cartItem && cartItem.amount > 1) {
        cartItem.amount -= 1;
      }

      // Update totalAmount whenever an item's quantity is decreased
      state.totalAmount = state.cartItems.reduce(
        (total, cartItem) => total + cartItem.amount * cartItem.price,
        0
      );
    },
  },
});

export const { clearCart, addItem, removeItem, increase, decrease } =
  cartSlice.actions;

export default cartSlice.reducer;
