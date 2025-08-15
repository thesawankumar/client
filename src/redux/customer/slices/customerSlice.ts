import { createSlice } from "@reduxjs/toolkit";
import type { HomeCategory, HomeData } from "../../../types/homeCategoryTypes";
import { createHomePageCategories } from "../actions/customerAction";
interface HomeState {
  homePageData: HomeData | null;
  homeCategories: HomeCategory[];
  loading: boolean;
  error: string | null;
}
const initialState: HomeState = {
  homePageData: null,
  homeCategories: [],
  loading: false,
  error: null,
};

const customerSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (buillder) => {
    buillder
      .addCase(createHomePageCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createHomePageCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.homePageData = action.payload;
      })
      .addCase(createHomePageCategories.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Failed to Create Home Categories";
      });
  },
});

export default customerSlice.reducer;
