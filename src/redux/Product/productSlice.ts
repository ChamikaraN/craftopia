import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types";

export interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { loadProducts } = productSlice.actions;

export default productSlice.reducer;
