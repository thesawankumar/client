import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/Api";

export const sendLoginOtp = createAsyncThunk(
  "/auth/sendLoginOtp",
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
      const jwt = response.data.jwt;
      localStorage.setItem("user-jwt", jwt);
      return response.data.jwt;
    } catch (error) {
      console.error("Error->  SIGN IN", error);
      rejectWithValue(error);
    }
  }
);
export const signup = createAsyncThunk<any, any>(
  "/auth/signup",
  async (SignUpRequest, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/signup", SignUpRequest);
      console.log("SIGN UP SUCCESSFUL", response.data);
      const jwt = response.data.jwt;
      localStorage.setItem("user-jwt", jwt);
      return response.data.jwt;
    } catch (error) {
      console.error("Error->  SIGN UP", error);
      rejectWithValue(error);
    }
  }
);
export const fetchUserProfile = createAsyncThunk<any, any>(
  "/auth/fetchUserProfile",
  async ({ jwt }, { rejectWithValue }) => {
    try {
      const response = await api.get("/user/profile", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("User Deatils SUCCESSFUL", response.data);
      return response.data;
    } catch (error) {
      console.error("Error->  SIGN UP", error);
      rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  "/auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      console.log("Before removing JWT:", localStorage.getItem("user-jwt")); // debug
      localStorage.removeItem("user-jwt");
      console.log("After removing JWT:", localStorage.getItem("user-jwt")); // debug
      return { success: true };
    } catch (error) {
      console.error("Error-> LOGOUT ERROR", error);
      return rejectWithValue(error);
    }
  }
);
