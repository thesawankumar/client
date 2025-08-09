import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Cart, CartItem } from "../../../types/cartTypes";
import {
  addItemToCart,
  deleteCartItem,
  fetchUserCart,
  updateCartItem,
} from "../actions/cartAction";
import {
  sumCartItemMrpPrice,
  sumCartItemSellingPrice,
} from "../../../utils/sumCartItemMrpPrice";
import { applyCoupon } from "../actions/couponAction";

interface CartState {
  cart: Cart | null;
  loading: boolean;
  error: string | null;
}
const initialState: CartState = {
  cart: null,
  loading: false,
  error: null,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCartState: (state) => {
      state.cart = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserCart.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(
        fetchUserCart.fulfilled,
        (state, action: PayloadAction<Cart>) => {
          (state.cart = action.payload), (state.loading = false);
        }
      )
      .addCase(fetchUserCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(addItemToCart.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(
        addItemToCart.fulfilled,
        (state, action: PayloadAction<CartItem>) => {
          if (state.cart) {
            state.cart.cartItems.push(action.payload);
          }
          state.loading = false;
        }
      )
      .addCase(addItemToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error as string;
      })
      .addCase(deleteCartItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        if (state.cart) {
          state.cart.cartItems = state.cart.cartItems.filter(
            (item: CartItem) => item.id !== action.meta.arg.cartItemId
          );
          const mrpPrice = sumCartItemMrpPrice(state.cart?.cartItems || []);
          const sellingPrice = sumCartItemSellingPrice(
            state.cart?.cartItems || []
          );
          state.cart.totalSellingPrice = sellingPrice;
          state.cart.totalMrpPrice = mrpPrice;
        }
        state.loading = false;
      })
      .addCase(deleteCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to delete cart item";
      })
      .addCase(updateCartItem.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        if (state.cart) {
          const index = state.cart.cartItems.findIndex(
            (item: CartItem) => item.id === action.meta.arg.cartItemId
          );

          if (index !== -1) {
          
            state.cart.cartItems[index] = {
              ...state.cart.cartItems[index],
              ...action.payload,
            };
          }

          const mrpPrice = sumCartItemMrpPrice(state.cart?.cartItems || []);
          const sellingPrice = sumCartItemSellingPrice(
            state.cart?.cartItems || []
          );
          state.cart.totalSellingPrice = sellingPrice;
          state.cart.totalMrpPrice = mrpPrice;
        }
        state.loading = false;
      })

      .addCase(updateCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(applyCoupon.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      });
  },
});

export default cartSlice.reducer;
export const { resetCartState } = cartSlice.actions;
