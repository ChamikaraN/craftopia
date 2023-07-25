import { combineReducers, Reducer } from "redux";
import cartReducer, { CartState } from "./Cart/cartSlice";
import productReducer, { ProductState } from "./Product/productSlice";
import categoryReducer, { CategoryState } from "./Category/categorySlice";

interface RootState {
  cart: CartState;
  product: ProductState;
  category: CategoryState;
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  cart: cartReducer,
  product: productReducer,
  category: categoryReducer,
});

export default rootReducer;
