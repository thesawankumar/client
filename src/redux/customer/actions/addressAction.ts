import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/Api";
import type { Address } from "../../../types/UserTypes";

export const fetchUserAddresses = createAsyncThunk<
  Address[], // return type
  string // argument: JWT token
>("address/fetchUserAddresses", async (jwt, { rejectWithValue }) => {
  try {
    const response = await api.get("/user/address/all", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("Fetch All Address", response.data);
    return response.data as Address[];
  } catch (error: any) {
    return rejectWithValue(error.response?.data || "Failed to fetch addresses");
  }
});
