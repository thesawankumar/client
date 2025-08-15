import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchSellerProfile, getSellerByAdmin, updateSellerStatus } from "../actions/sellerAction";
import type { Seller } from "../../../types/SellerTypes";

interface SellerState {
  seller: any[];
  selectedSeller: any;
  profile: any;
  report: any;
  loading: boolean;
  error: any;
}

const initialState: SellerState = {
  seller: [],
  selectedSeller: null,
  profile: null,
  report: null,
  loading: false,
  error: null,
};

const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSellerProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSellerProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    });
    builder.addCase(fetchSellerProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder
      .addCase(getSellerByAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getSellerByAdmin.fulfilled,
        (state, action: PayloadAction<Seller[]>) => {
          state.loading = false;
          state.seller = action.payload;
        }
      )
      .addCase(
        getSellerByAdmin.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
        }
      )
      .addCase(
        updateSellerStatus.fulfilled,
        (state, action: PayloadAction<Seller>) => {
          const index = state.seller.findIndex(
            (s) => s.id === action.payload.id
          );
          if (index !== -1) state.seller[index] = action.payload;
        }
      );
  },
});

export default sellerSlice.reducer;
