import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Transaction } from "../../../types/transactionTypes";
import { api } from "../../../config/Api";

// Create thunk
export const fetchTransactionBySeller = createAsyncThunk<
  Transaction[], // ✅ Return type
  string, // ✅ Argument type (jwt)
  { rejectValue: string } // ✅ Rejection type
>("transaction/fetchTransactionBySeller", async (jwt, { rejectWithValue }) => {
  try {
    const response = await api.get(`/transaction/seller`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    console.log("Fetch Transaction By Seller", response.data);
    return response.data;
  } catch (error: any) {
    console.error("Error fetching transactions:", error);
    return rejectWithValue(
      error.response?.data?.message || "Failed to fetch transactions"
    );
  }
});
// Create thunk
export const fetchAllTransaction = createAsyncThunk<
  Transaction[], // ✅ Return type
  void, // ✅ Argument type (jwt)
  { rejectValue: string } // ✅ Rejection type
>("transaction/fetchAllTransaction", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get<Transaction[]>(`/transaction/all`);

    console.log("Fetch All Transaction", response.data);
    return response.data;
  } catch (error: any) {
    console.error("Error fetching All transactions:", error);
    return rejectWithValue(
      error.response?.data?.message || "Failed to fetch All transactions"
    );
  }
});
