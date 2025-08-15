import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  applyCoupon,
  createCoupon,
  deleteCoupon,
  fetchAllCoupons,
} from "../actions/copuonAction";
import type { CouponState } from "../../../types/couponTypes";

const initialState: CouponState = {
  coupons: [], // list of all coupons
  cart: null, // current cart info
  loading: false, // loading state
  error: null, // error message
  couponCreated: false, // flag for coupon creation success
  couponApplied: false, // flag for coupon applied in cart
};

const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    resetCouponState: (state) => {
      state.loading = false;
      state.error = null;
      state.couponCreated = false;
      state.couponApplied = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCoupon.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.couponCreated = false;
      })
      .addCase(createCoupon.fulfilled, (state, action) => {
        state.loading = false;
        state.coupons.push(action.payload);
        state.couponCreated = true;
      })
      .addCase(createCoupon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.couponCreated = false;
      });
    builder
      .addCase(fetchAllCoupons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCoupons.fulfilled, (state, action) => {
        state.loading = false;
        state.coupons = action.payload;
      })
      .addCase(fetchAllCoupons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
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
      });
    builder
      .addCase(
        applyCoupon.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || "Failed to Apply Coupon";
          state.couponApplied = false;
        }
      )
      // Delete coupon
      .addCase(deleteCoupon.fulfilled, (state, action) => {
        state.coupons = state.coupons.filter((c) => c.id !== action.payload);
      })
      .addCase(deleteCoupon.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const { resetCouponState } = couponSlice.actions;
export default couponSlice.reducer;
