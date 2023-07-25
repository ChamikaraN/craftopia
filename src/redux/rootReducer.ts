import { combineReducers, Reducer } from "redux";
import employeeReducer, { EmployeeState } from "./Employee/reducer";
import cartReducer, { CartState } from "./Cart/cartSlice";
import productReducer, { ProductState } from "./Product/productSlice";
import categoryReducer, { CategoryState } from "./Category/categorySlice";

interface RootState {
  employee: EmployeeState;
  cart: CartState;
  product: ProductState;
  category: CategoryState;
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  employee: employeeReducer,
  cart: cartReducer,
  product: productReducer,
  category: categoryReducer,
});

export default rootReducer;
