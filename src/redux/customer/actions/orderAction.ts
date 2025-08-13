import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Order, OrderItem } from "../../../types/orderTypes";
import { api } from "../../../config/Api";
import type { Address } from "../../../types/UserTypes";

export const fetchUserOrderHistory = createAsyncThunk<
  Order[],
  string,
  { rejectValue: string }
>("order/fetchUserOrderHistory", async (jwt, { rejectWithValue }) => {
  try {
    const response = await api.get("/order/user-orders", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("Fetch User Data", response.data);
    return response.data;
  } catch (error: any) {
    console.error("Error -> Fetch User order", error);
    return rejectWithValue(
      error?.response?.data?.message || "Failed to fetch user orders"
    );
  }
});

export const fetchOrderById = createAsyncThunk<
  Order,
  { orderId: number; jwt: string },
  { rejectValue: string }
>("order/fetchOrderById", async ({ jwt, orderId }, { rejectWithValue }) => {
  try {
    const response = await api.get(`/order/${orderId}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("Fetch Order By ID Data", response.data);
    return response.data;
  } catch (error: any) {
    console.error("Error -> Fetch Order By ID order", error);
    return rejectWithValue(
      error?.response?.data?.message || "Failed to fetch Order By ID orders"
    );
  }
});

export const createOrder = createAsyncThunk<
  any, // success return type
  { address: Address; jwt: string; paymentGateway: string }, // argument type
  { rejectValue: string } // rejected value type
>(
  "order/createOrder",
  async ({ address, jwt, paymentGateway }, { rejectWithValue }) => {
    try {
      const response = await api.post<any>("/order/create-order", address, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        params: {
          paymentMethod: paymentGateway,
        },
      });

      console.log("Create Order Data", response.data);

      if (response.data.payment_link_url) {
        window.location.href = response.data.payment_link_url;
      }

      return response.data;
    } catch (error: any) {
      console.error("Error -> Create order", error);
      return rejectWithValue(
        error?.response?.data?.message || "Failed to Create Order"
      );
    }
  }
);

export const fetchOrderItemById = createAsyncThunk<
  OrderItem,
  { orderItemId: number; jwt: string },
  { rejectValue: string }
>(
  "order/fetchOrderItemById",
  async ({ jwt, orderItemId }, { rejectWithValue }) => {
    try {
      const response = await api.get(`/order/order-item/${orderItemId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Fetch OrderItem By ID Data", response.data);
      return response.data;
    } catch (error: any) {
      console.error("Error -> Fetch OrderItem By ID order", error);
      return rejectWithValue(
        error?.response?.data?.message ||
          "Failed to fetch OrderItem By ID orders"
      );
    }
  }
);

export const paymentSuccess = createAsyncThunk<
  any,
  { paymentId: string; jwt: string; paymentLinkId: string },
  { rejectValue: string }
>(
  "order/paymentSuccess",
  async ({ jwt, paymentId, paymentLinkId }, { rejectWithValue }) => {
    try {
      const response = await api.get(`/payment/success/${paymentId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        params: { paymentLinkId },
      });
      console.log("Payment Success", response.data);
      return response.data;
    } catch (error: any) {
      console.error("Error ->Payment Success", error);
      return rejectWithValue(
        error?.response?.data?.message || "Failed to Payment Success"
      );
    }
  }
);

export const cancelOrder = createAsyncThunk<
  Order, // Success return type
  { orderId: number; jwt: string }, // Arguments type
  { rejectValue: string } // Rejected value type
>("order/cancelOrder", async ({ orderId, jwt }, { rejectWithValue }) => {
  try {
    const response = await api.put(`/order/${orderId}/cancel`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    console.log("Cancel Order Data", response.data);
    return response.data;
  } catch (error: any) {
    console.error("Error -> Cancel order", error);
    return rejectWithValue(
      error?.response?.data?.message || "Failed to cancel order"
    );
  }
});
