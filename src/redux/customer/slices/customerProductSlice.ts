import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../../types/ProductTypes";
import {
  fetchAllProduct,
  fetchProductById,
  searchProduct,
} from "../actions/customerProductAction";

interface ProductState {
  product: Product | null;
  products: Product[];
  totalPages: number;
  loading: boolean;
  error: string | null | undefined | any;
  searchProduct: Product[];
}
const initialState: ProductState = {
  product: null,
  products: [],
  totalPages: 0,
  loading: false,
  error: null,
  searchProduct: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
    builder.addCase(fetchAllProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.content;
    });
    builder.addCase(fetchAllProduct.rejected, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
    builder.addCase(searchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(searchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(searchProduct.rejected, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

export default productSlice.reducer;
