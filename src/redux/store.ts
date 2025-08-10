import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import sellerSlice from "./seller/slices/sellerSlice";
import sellerProductSlice from "./seller/slices/sellerProductSlice";
import productSlice from "./customer/slices/customerProductSlice";
import authSlice from "./auth/AuthSlice";
import cartSlice from "../redux/customer/slices/cartSlice";
import orderSlice from "../redux/customer/slices/orderSlice";
const rootReducer = combineReducers({
  // your reducers here
  seller: sellerSlice,
  sellerProduct: sellerProductSlice,
  product: productSlice,
  auth: authSlice,
  cart: cartSlice,
  order: orderSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// Type aliases
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// Typed hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
