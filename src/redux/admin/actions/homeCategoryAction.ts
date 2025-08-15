import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/Api"; // make sure path is correct
import type { HomeCategory } from "../../../types/homeCategoryTypes";

export const updateHomeCategory = createAsyncThunk<
  HomeCategory,
  { id: number; data: HomeCategory }
>(
  "homeCategory/updateHomeCategory",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      // Assuming your backend endpoint is /home-category/:id
      const response = await api.patch(
        `/admin/home-category/update/${id}`,
        data
      );
      console.log("Updated HomeCategory:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("Error updating HomeCategory:", error);
      // Return the server error message if available, otherwise a default string
      return rejectWithValue(
        error.response?.data || "Failed to update HomeCategory"
      );
    }
  }
);
export const fetchHomeCategories = createAsyncThunk<HomeCategory[]>(
  "homeCategory/fetchHomeCategories",
  async (_, { rejectWithValue }) => {
    try {
      // Assuming your backend endpoint is /home-category/:id
      const response = await api.get(`/admin/home-category/get-all`);
      console.log("Fetched  Home Category:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("Error Fetch HomeCategory:", error);
      // Return the server error message if available, otherwise a default string
      return rejectWithValue(
        error.response?.data || "Failed to Fetch HomeCategory"
      );
    }
  }
);


