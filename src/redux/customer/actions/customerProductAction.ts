import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/Api";

export const fetchProductById = createAsyncThunk<any, number>(
  "product/fetchProductById",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/product/${productId}`);
      const data = response.data;
      console.log("Fetch Product By id", data);
      return data;
    } catch (error) {
      console.log("Error -> Fetch Product By ID", error);
      rejectWithValue(error);
    }
  }
);

export const searchProduct = createAsyncThunk(
  "product/searchProduct",
  async (query, { rejectWithValue }) => {
    try {
      const response = await api.get(`/product/search`, {
        params: {
          query,
        },
      });
      const data = response.data;
      console.log("Search Product ", data);
      return data;
    } catch (error) {
      console.log("Error -> Search Product ", error);
      rejectWithValue(error);
    }
  }
);

export const fetchAllProduct = createAsyncThunk<any, any>(
  "product/fetchAllProduct",
  async (params, { rejectWithValue }) => {
    try {
      const response = await api.get(`/product/all`, {
        params: { ...params, pageNumber: params.pageNumber || 0 },
      });
      const data = response.data;
      console.log("Fetch All Product ", data);
      return data;
    } catch (error) {
      console.log("Error -> Fetch All Product ", error);
      rejectWithValue(error);
    }
  }
);
