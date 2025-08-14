import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Order, OrderStatus } from "../../../types/orderTypes";
import { api } from "../../../config/Api";

export const fetchSellerOrder = createAsyncThunk<Order[], string>(
  "sellerOrder/fetchSellerOrder",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get("/seller/order/all-orders", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Fetch Seller Order", response.data);

      return response.data;
    } catch (error: any) {
      console.error("Error fetching seller orders:", error);

      // Pass a readable error message to the rejected action
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch seller orders"
      );
    }
  }
);

export const updateOrderStatus = createAsyncThunk<
  Order,
  { jwt: string; orderId: number; orderStatus: OrderStatus }
>(
  "sellerOrder/updateOrderStatus",
  async ({ jwt, orderId, orderStatus }, { rejectWithValue }) => {
    try {
      const response = await api.patch(
        `/seller/order/${orderId}/update-status/${orderStatus}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      console.log("Update Seller Order Status", response.data);

      return response.data;
    } catch (error: any) {
      console.error("Error Update Seller Order Status", error);

      // Pass a readable error message to the rejected action
      return rejectWithValue(
        error.response?.data?.message || "Failed to Update Seller Order Status"
      );
    }
  }
);

export const deleteSellerOrder = createAsyncThunk<
  any,
  { jwt: string; orderId: number }
>(
  "sellerOrder/deleteSellerOrder",
  async ({ jwt, orderId }, { rejectWithValue }) => {
    try {
      const response = await api.get(`/seller/order/${orderId}/delete`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Delete Seller Order", response.data);

      return response.data;
    } catch (error: any) {
      console.error("Error Delete seller orders:", error);

      // Pass a readable error message to the rejected action
      return rejectWithValue(
        error.response?.data?.message || "Failed to Delete seller orders"
      );
    }
  }
);
