import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../../types/ProductTypes";
import { createProduct, fetchSellerProduct } from "../actions/productAction";

//Product
interface sellerProductState {
  product: Product[];
  loading: boolean;
  error: string | null | undefined;
}
const initialState: sellerProductState = {
  product: [],
  loading: false,
  error: null,
};

const sellerProductSlice = createSlice({
  name: "sellerProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSellerProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSellerProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchSellerProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default sellerProductSlice.reducer;
