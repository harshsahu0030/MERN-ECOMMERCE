import express from "express";
import {
  addAndUpdateReviewOnProduct,
  createNewProduct,
  deleteProduct,
  getAllProductReviews,
  getAllProducts,
  getAllProductsAdmin,
  getSingleProductAdmin,
  getSingleProductDetails,
  topRatedProducts,
  topSellingProducts,
  trendingProducts,
  updateProduct,
} from "../controllers/productController.js";
import { authorizeRoles, isAuthentication } from "../middlewares/auth.js";

const router = express.Router();

router.route("/products").get(getAllProducts);

router.route("/product/:id").get(getSingleProductDetails);

router.route("/products/trending").get(trendingProducts);

router.route("/products/toprated").get(topRatedProducts);

router.route("/products/topselling").get(topSellingProducts);

router
  .route("/product/review/:id")
  .put(isAuthentication, addAndUpdateReviewOnProduct);

router.route("/product/reviews/:id").get(getAllProductReviews);

//---------------------------------------------------------------

// Admin routes
router
  .route("/admin/product/new")
  .post(isAuthentication, authorizeRoles("admin"), createNewProduct);

router
  .route("/admin/products")
  .get(isAuthentication, authorizeRoles("admin"), getAllProductsAdmin);

router
  .route("/admin/product/:id")
  .get(isAuthentication, authorizeRoles("admin"), getSingleProductAdmin)
  .put(isAuthentication, authorizeRoles("admin"), updateProduct)
  .delete(isAuthentication, authorizeRoles("admin"), deleteProduct);

export default router;
