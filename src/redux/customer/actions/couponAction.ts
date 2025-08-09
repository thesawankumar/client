import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Cart } from "../../../types/cartTypes";
import { api } from "../../../config/Api";

export const applyCoupon = createAsyncThunk<
  Cart,
  { apply: string; code: string; orderValue: string; jwt: string },
  { rejectValue: string }
>(
  "coupon/applyCoupon",
  async ({ apply, code, orderValue, jwt }, { rejectWithValue }) => {
    try {
      const response = await api.post<Cart>(
        "/admin/coupon/apply-coupon",
        null,
        {
          params: { apply, code, orderValue },
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      console.log("Apply Coupon ", response.data);
      return response.data; // ✅ Return the updated Cart object
    } catch (error: any) {
      console.error("Apply Coupon Error", error);
      return rejectWithValue(error.response?.data || "Failed to apply coupon"); // ✅ Properly return error
    }
  }
);
