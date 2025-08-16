import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import sellerSlice from "./seller/slices/sellerSlice";
import sellerProductSlice from "./seller/slices/productSlice";
import productSlice from "./customer/slices/customerProductSlice";
import authSlice from "./auth/AuthSlice";
import cartSlice from "../redux/customer/slices/cartSlice";
import orderSlice from "../redux/customer/slices/orderSlice";
import wishlistSlice from "../redux/customer/slices/wishlistSlice";
import sellerOrderSlice from "../redux/seller/slices/orderSlice";
import transactionSlice from "../redux/seller/slices/transactionSlice";
import homeCategorySlice from "./admin/slices/homeCategorySlice";
import customerSlice from "../redux/customer/slices/customerSlice";
import dealSlice from "../redux/admin/slices/dealSlice";
import couponSlice from "../redux/admin/slices/couponSlice";
import addressSlice from "../redux/customer/slices/addressSlice";

const rootReducer = combineReducers({
  // your reducers here
  seller: sellerSlice,
  sellerProduct: sellerProductSlice,
  product: productSlice,
  auth: authSlice,
  cart: cartSlice,
  order: orderSlice,
  wishlist: wishlistSlice,
  //seller slcie
  sellerOrder: sellerOrderSlice,
  transactions: transactionSlice,
  home: homeCategorySlice,
  customer: customerSlice,
  deal: dealSlice,
  coupon: couponSlice,
  address: addressSlice,
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
