import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../config/Api";

export const sendLoginOtp = createAsyncThunk(
  "auth/sendLoginOtp",
  async (
    { email, role }: { email: string; role: "ROLE_SELLER" | "ROLE_CUSTOMER" },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.post("/auth/sent-otp", {
        email,
        role,
      });
      console.log("Login Otp", response);
      return response.data;
    } catch (error: any) {
      console.error("Error->  Login Otp", error);
      return rejectWithValue(error.response?.data || "OTP request failed");
    }
  }
);

export const signin = createAsyncThunk<any, any>(
  "/auth/signin",
  async (LoginRequest, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/sign-in", LoginRequest);
      console.log("SIGN IN SUCCESSFUL", response.data);
      return response.data;
    } catch (error) {
      console.error("Error->  SIGN IN", error);
            rejectWithValue(error)
    }
  }
);
export const logout = createAsyncThunk<any, any>(
  "/auth/logout",
  async (navigate, { rejectWithValue }) => {
    try {
      localStorage.removeItem("jwt");
      console.log("Logout Success");
      navigate("/");
    } catch (error) {
      console.error("Error-> LOGOUT ERROR", error);
      rejectWithValue(error)
    }
  }
);
