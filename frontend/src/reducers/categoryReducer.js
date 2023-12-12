import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

//get Product details
export const GetCategoriesReducer = createReducer(initialState, {
  GetCategoriesRequest: (state) => {
    state.loading = true;
  },
  GetCategoriesSuccess: (state, action) => {
    state.loading = false;
    state.data = action.payload;
  },
  GetCategoriesFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  clearErrors: (state) => {
    state.error = null;
  },
  clearMessage: (state) => {
    state.message = null;
  },
});
