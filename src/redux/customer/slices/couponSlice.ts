import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CouponState } from "../../../types/couponTypes";
import { applyCoupon } from "../actions/couponAction";

const initialState: CouponState = {
  coupons: [],
  cart: null,
  loading: false,
  error: null,
  couponApplied: false,
  couponCreated: false,
};

const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(applyCoupon.pending, (state) => {
        state.loading = false;
        state.error = null;
        state.couponApplied = false;
      })
      .addCase(applyCoupon.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        if (action.meta.arg.apply == "true") {
          state.couponApplied = true;
        }
      })
      .addCase(
        applyCoupon.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || "Failed to Apply Coupon";
          state.couponApplied = false;
        }
      );
  },
});

export default couponSlice.reducer;
