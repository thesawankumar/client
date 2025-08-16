import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/Api";
import type { Coupon } from "../../../types/couponTypes";
import type { Cart } from "../../../types/cartTypes";

// Async thunk for creating a coupon (only accessible by admin)
export const createCoupon = createAsyncThunk(
  "coupon/createCoupon",
  async (couponData: any, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("admin-jwt");
      if (!token) throw new Error("JWT not found. Login as admin.");

      const response = await api.post("/admin/coupon/create", couponData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log("Create Coupon", response.data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchAllCoupons = createAsyncThunk<Coupon[]>(
  "coupon/fetchAllCoupons",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("admin-jwt");
      const response = await api.get("/admin/coupon/all", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log("GET All Coppons", response.data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to fetch coupons");
    }
  }
);

export const applyCoupon = createAsyncThunk<
  Cart,
  { apply: string; code: string; orderValue: number; jwt: string },
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

// Delete coupon
export const deleteCoupon = createAsyncThunk<
  number, // return coupon ID after deletion
  { id: number; jwt: string },
  { rejectValue: string }
>("coupon/deleteCoupon", async ({ id, jwt }, { rejectWithValue }) => {
  try {
    await api.delete(`/admin/coupon/delete/${id}`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    return id; // return deleted coupon id
  } catch (error: any) {
    return rejectWithValue(error.response?.data || "Failed to delete coupon");
  }
});
