import { createSlice } from "@reduxjs/toolkit";
import type { TransactionState } from "../../../types/transactionTypes";
import {
  fetchAllTransaction,
  fetchTransactionBySeller,
} from "../actions/transactionAction";

const initialState: TransactionState = {
  transactions: [],
  transaction: null,
  loading: false,
  error: null,
};
const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactionBySeller.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTransactionBySeller.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions = action.payload;
      })
      .addCase(fetchTransactionBySeller.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchAllTransaction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllTransaction.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions = action.payload;
      })
      .addCase(fetchAllTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default transactionSlice.reducer;
