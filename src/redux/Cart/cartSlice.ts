import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  amount: number;
  price: number;
}

export interface CartState {
  cartItems: CartItem[];
  amount: number;
  total: number;
  isLoading: boolean;
}

const initialState: CartState = {
  cartItems: [
    {
      id: 1,
      amount: 10,
      price: 10,
    },
    {
      id: 1,
      amount: 10,
      price: 10,
    },
    {
      id: 1,
      amount: 10,
      price: 10,
    },
  ],
  amount: 0,
  total: 0,
  isLoading: false,
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
      state.cartItems = [...state.cartItems, item];
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === id);
      if (cartItem) {
        cartItem.amount = cartItem.amount + 1;
      }
    },
    decrease: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === id);
      if (cartItem) {
        cartItem.amount = cartItem.amount - 1;
      }
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
