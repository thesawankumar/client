import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Cart, CartItem } from "../../../types/cartTypes";
import { api } from "../../../config/Api";

export const fetchUserCart = createAsyncThunk<Cart, string>(
  "cart/fetchUserCart",
  async (jwt: string, { rejectWithValue }) => {
    try {
      const response = await api.get("/cart/user-cart", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Fetch User Cart", response.data);
      return response.data;
    } catch (error) {
      console.log("Fetch User Cart", error);
      rejectWithValue(error);
    }
  }
);

interface AddItemToCartRequest {
  productId: number | undefined;
  size: string;
  quantity: number;
}
export const addItemToCart = createAsyncThunk<
  CartItem,
  { jwt: string | null; request: AddItemToCartRequest }
>("cart/addItemToCart", async ({ jwt, request }, { rejectWithValue }) => {
  try {
    const response = await api.put("/cart/add-item", request, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("Cart Added", response.data);
    return response.data;
  } catch (error) {
    console.log("Cart Add Error->> ", error);
    rejectWithValue(error);
  }
});
export const deleteCartItem = createAsyncThunk<
  any,
  { jwt: string | null; cartItemId: number }
>("cart/deleteCartItem", async ({ jwt, cartItemId }, { rejectWithValue }) => {
  try {
    const response = await api.delete(`/cart/delete-item/${cartItemId}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("Cart Deleted", response.data);
    return response.data;
  } catch (error) {
    console.log("Cart Delete Error->> ", error);
    rejectWithValue(error);
  }
});

export const updateCartItem = createAsyncThunk<
  any,
  { jwt: string | null; cartItemId: number; cartItem: any }
>(
  "cart/updateCartItem",
  async ({ jwt, cartItemId, cartItem }, { rejectWithValue }) => {
    try {
      const response = await api.put(
        `/cart/update-item/${cartItemId}`,
        cartItem,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      console.log("Cart Updated", response.data);
      return response.data;
    } catch (error) {
      console.log("Cart Updated Error->> ", error);
      rejectWithValue(error);
    }
  }
);
