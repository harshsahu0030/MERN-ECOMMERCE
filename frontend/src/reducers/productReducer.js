import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const GetAllProductsReducer = createReducer(initialState, {
  GetAllProductsRequest: (state) => {
    state.loading = true;
  },
  GetAllProductsSuccess: (state, action) => {
    state.loading = false;
    state.data = action.payload;
  },
  GetAllProductsFailure: (state, action) => {
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

export const TrendingProductsReducer = createReducer(initialState, {
  TrendingProductsRequest: (state) => {
    state.loading = true;
  },
  TrendingProductsSuccess: (state, action) => {
    state.loading = false;
    state.data = action.payload;
  },
  TrendingProductsFailure: (state, action) => {
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

export const TopRatedProductsReducer = createReducer(initialState, {
  TopRatedProductsRequest: (state) => {
    state.loading = true;
  },
  TopRatedProductsSuccess: (state, action) => {
    state.loading = false;
    state.data = action.payload;
  },
  TopRatedProductsFailure: (state, action) => {
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

export const TopSellingProductsReducer = createReducer(initialState, {
  TopSellingProductsRequest: (state) => {
    state.loading = true;
  },
  TopSellingProductsSuccess: (state, action) => {
    state.loading = false;
    state.data = action.payload;
  },
  TopSellingProductsFailure: (state, action) => {
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

//get Product details
export const GetProductDetailsReducer = createReducer(initialState, {
  GetProductDetailsRequest: (state) => {
    state.loading = true;
  },
  GetProductDetailsSuccess: (state, action) => {
    state.loading = false;
    state.data = action.payload;
  },
  GetProductDetailsFailure: (state, action) => {
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

//add and remove product from wishlist
export const WishlistReducer = createReducer(initialState, {
  WishlistRequest: (state) => {
    state.loading = true;
  },
  WishlistSuccess: (state, action) => {
    state.loading = false;
    state.data = action.payload;
  },
  WishlistFailure: (state, action) => {
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

// get wishlisproducts
export const GetWishlistProductsReducer = createReducer(initialState, {
  GetWishlistProductsRequest: (state) => {
    state.loading = true;
  },
  GetWishlistProductsSuccess: (state, action) => {
    state.loading = false;
    state.data = action.payload;
  },
  GetWishlistProductsFailure: (state, action) => {
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

//
export const productReducer = createReducer(initialState, {
  CreateProductRequest: (state) => {
    state.loading = true;
  },
  CreateProductSuccess: (state, action) => {
    state.loading = false;
    state.data = action.payload;
  },
  CreateProductFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  UpdateProductRequest: (state) => {
    state.loading = true;
  },
  UpdateProductSuccess: (state, action) => {
    state.loading = false;
    state.data = action.payload;
  },
  UpdateProductFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  DeleteProductRequest: (state) => {
    state.loading = true;
  },
  DeleteProductSuccess: (state, action) => {
    state.loading = false;
    state.data = action.payload;
  },
  DeleteProductFailure: (state, action) => {
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
