import { createSlice } from "@reduxjs/toolkit";
import type { DealState } from "../../../types/dealTypes";
import { createDeal, getAllDeal } from "../actions/dealAction";

const initialState: DealState = {
  deals: [],
  loading: false,
  error: null,
  dealCreated: false,
  dealUpdated: false,
};

const dealSlice = createSlice({
  name: "deal",
  initialState,
  reducers: {
    resetDealFlags: (state) => {
      state.dealCreated = false;
      state.dealUpdated = false;
    },
  },
  extraReducers: (builder) => {
    // 🔹 Create Deal
    builder
      .addCase(createDeal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createDeal.fulfilled, (state, action) => {
        state.loading = false;
        state.deals.push(action.payload);
        state.dealCreated = true;
      })
      .addCase(createDeal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // 🔹 Get All Deals
    builder
      .addCase(getAllDeal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllDeal.fulfilled, (state, action) => {
        state.loading = false;
        state.deals = action.payload; // replace deals with fetched ones
      })
      .addCase(getAllDeal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetDealFlags } = dealSlice.actions;
export default dealSlice.reducer;
