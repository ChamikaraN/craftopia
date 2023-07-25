import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../../types";

export interface CategoryState {
  categories: Category[];
}

const initialState: CategoryState = {
  categories: [],
};
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    loadCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { loadCategories } = categorySlice.actions;

export default categorySlice.reducer;
