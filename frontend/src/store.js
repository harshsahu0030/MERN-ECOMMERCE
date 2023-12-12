import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer.js";
import {
  GetAllProductsReducer,
  GetProductDetailsReducer,
  GetWishlistProductsReducer,
  TopRatedProductsReducer,
  TopSellingProductsReducer,
  TrendingProductsReducer,
  WishlistReducer,
  productReducer,
} from "./reducers/productReducer.js";
import { GetCategoriesReducer } from "./reducers/categoryReducer.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    products: GetAllProductsReducer,
    product: productReducer,
    productDetails: GetProductDetailsReducer,
    trendingProducts: TrendingProductsReducer,
    topRatedProducts: TopRatedProductsReducer,
    topSellingProducts: TopSellingProductsReducer,
    getwishlistProducts: GetWishlistProductsReducer,
    wishlist: WishlistReducer,
    getCategories: GetCategoriesReducer,
  },
});

export default store;
