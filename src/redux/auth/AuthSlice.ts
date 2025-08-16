// src/redux/auth/AuthSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchUserProfile,
  logout,
  sendLoginOtp,
  signin,
  signup,
} from "./AuthAction";
import type { User } from "../../types/UserTypes";

interface AuthState {
  jwt: string | null;
  otpSent: boolean;
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
}
const initialState: AuthState = {
  jwt: null,
  otpSent: false,
  isLoggedIn: false,
  user: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendLoginOtp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(sendLoginOtp.fulfilled, (state) => {
      state.loading = false;
      state.otpSent = true;
    });
    builder.addCase(sendLoginOtp.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(signin.fulfilled, (state, action) => {
      state.jwt = action.payload.jwt;
      state.isLoggedIn = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.jwt = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.jwt = null;
      state.user = null;
    });
  },
});

export default authSlice.reducer;
