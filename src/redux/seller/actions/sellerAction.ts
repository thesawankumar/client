import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/Api";

export const fetchSellerProfile = createAsyncThunk(
  "/seller/fetchSellerProfile",
  async (jwt: string, { rejectWithValue }) => {
    try {
      const response = await api.get("seller/profile", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log(" Seller Profile", response.data);
      return response.data;
    } catch (error) {
      console.error("Error in Fetch Seller Profile", error);
      rejectWithValue(error)
    }
  }
);

export const sellerLogin = createAsyncThunk<any, any>(
  "/auth/sellerLogin",
  async (LoginRequest, { rejectWithValue }) => {
    try {
      const response = await api.post("/seller/login", LoginRequest);
      console.log("SIGN IN SUCCESSFUL", response.data);
      const jwt = response.data.jwt;
      localStorage.setItem("jwt", jwt);
      return response.data;
    } catch (error) {
      console.error("Error->  SIGN IN", error);
      rejectWithValue(error)
    }
  }
);
