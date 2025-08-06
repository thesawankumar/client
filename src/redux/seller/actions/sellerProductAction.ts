import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Product } from "../../../types/ProductTypes";
import { api } from "../../../config/Api";

export const fetchSellerProduct = createAsyncThunk<Product[], any>(
  "/sellerProduct/fetchSellerProduct",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get(`/sellers/product`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Response", response);
      const data = response.data;
      console.log("Seller Product ", data);
      return data;
    } catch (error) {
      console.error(
        "Error--> Something Went Wrong in Seller Fetch Product",
        error
      );
    }
  }
);

export const createProduct = createAsyncThunk<
  Product,
  { request: any; jwt: string }
>("/sellerProduct/createProduct", async (args, { rejectWithValue }) => {
  const { request, jwt } = args;
  try {
    const response = await api.post("/sellers/product/create", request, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("create Product ", response.data);
    return response.data;
  } catch (error) {
    console.log("Error-> Create Product", error);
  }
});
