import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/Api";

export const createDeal = createAsyncThunk(
  "deal/createDeal",
  async (deal: any, { rejectWithValue }) => {
    try {
      const jwt = localStorage.getItem("user-jwt"); // ✅ get token if needed

      const response = await api.post("/admin/deal/create", deal, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      console.log("✅ Deal Created:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Error creating deal:", error);

      // Pass a custom message to the rejected action
      return rejectWithValue(
        error.response?.data?.message || "Failed to create deal"
      );
    }
  }
);

export const getAllDeal = createAsyncThunk(
  "deal/getAllDeal",
  async (_, { rejectWithValue }) => {
    try {
      const jwt = localStorage.getItem("user-jwt"); // ✅ get token

      const response = await api.get("/admin/deal/all", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      console.log("✅ All Deals Fetched:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Error fetching deals:", error);

      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch deals"
      );
    }
  }
);
