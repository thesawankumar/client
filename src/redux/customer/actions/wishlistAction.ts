import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/Api";

export const getWishlistByUserId = createAsyncThunk(
  "wishlist/getWishlistByUserId",
  async (_, { rejectWithValue }) => {
    try {
      const jwt = localStorage.getItem("user-jwt"); // ✅ Get token here

      const response = await api.get("/wishlist/get-wishlist", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Get Wishlist By User Id", response.data);

      return response.data;
    } catch (error: any) {
      console.log("Get Wishlist by User Id Error:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const addProductToWishlist = createAsyncThunk(
  "wishlist/addProductToWishlist",
  async ({ productId }: { productId: number }, { rejectWithValue }) => {
    try {
      const jwt = localStorage.getItem("user-jwt");

      if (!jwt) {
        throw new Error("User is not authenticated");
      }

      const response = await api.post(
        `/wishlist/add-product/${productId}`,
        {}, // empty body
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      console.log("Add Product to Wishlist", response.data);
      return response.data;
    } catch (error: any) {
      console.error("Add Product to Wishlist Error:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
