import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Address } from "../../../types/UserTypes";
import { addUserAddress, fetchUserAddresses } from "../actions/addressAction";

interface AddressState {
  addresses: Address[];
  loading: boolean;
  error: string | null;
}

const initialState: AddressState = {
  addresses: [],
  loading: false,
  error: null,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserAddresses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUserAddresses.fulfilled,
        (state, action: PayloadAction<Address[]>) => {
          state.loading = false;
          state.addresses = action.payload;
        }
      )
      .addCase(fetchUserAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(addUserAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        addUserAddress.fulfilled,
        (state, action: PayloadAction<Address>) => {
          state.loading = false;
          state.addresses.push(action.payload); // add new address to state
        }
      )
      .addCase(addUserAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default addressSlice.reducer;
