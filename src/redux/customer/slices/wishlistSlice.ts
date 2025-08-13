import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Wishlist, WishlistState } from "../../../types/wishlistTypes";
import {
  addProductToWishlist,
  getWishlistByUserId,
} from "../actions/wishlistAction";

const initialState: WishlistState = {
  wishlist: null,
  loading: false,
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    resetWishlistState: (state) => {
      state.wishlist = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWishlistByUserId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getWishlistByUserId.fulfilled,
        (state, action: PayloadAction<Wishlist>) => {
          state.wishlist = action.payload;
          state.loading = false;
        }
      )
      .addCase(
        getWishlistByUserId.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
        }
      )
      .addCase(addProductToWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        addProductToWishlist.fulfilled,
        (state, action: PayloadAction<Wishlist>) => {
          state.wishlist = action.payload;
          state.loading = false;
        }
      )
      .addCase(
        addProductToWishlist.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { resetWishlistState } = wishlistSlice.actions;
export default wishlistSlice.reducer;
