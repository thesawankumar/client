import { createAsyncThunk } from "@reduxjs/toolkit";
import type { HomeCategory, HomeData } from "../../../types/homeCategoryTypes";
import { api } from "../../../config/Api";

  

export const createHomePageCategories = createAsyncThunk<
  HomeData,
  HomeCategory[]
>(
  "home/createHomePageCategories",
  async (homeCategories, { rejectWithValue }) => {
    try {
      const response = await api.post(
        "/admin/home-category/create",
        homeCategories
      );
      console.log("Created Home Page Categories:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("Error creating home page categories:", error);
      return rejectWithValue(
        error.response?.data || "Failed to create home page categories"
      );
    }
  }
);
