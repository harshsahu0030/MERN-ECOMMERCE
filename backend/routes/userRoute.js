import express from "express";
import {
  addAndRemoveProductInWishlist,
  getAllProductsInWishlist,
  getAllUser,
  getSingleUser,
  loadUser,
  loginUser,
  logoutUser,
  registerUser,
  updatePassword,
} from "../controllers/userController.js";
import { authorizeRoles, isAuthentication } from "../middlewares/auth.js";

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/me").get(isAuthentication, loadUser);

router.route("/logout").get(isAuthentication, logoutUser);

router.route("/update/password").put(isAuthentication, updatePassword);

router.route("/wishlist").get(isAuthentication, getAllProductsInWishlist);

router
  .route("/wishlist/:id")
  .put(isAuthentication, addAndRemoveProductInWishlist);

//---------------------------------------------------------------

// Admin routes

router
  .route("/admin/users")
  .get(isAuthentication, authorizeRoles("admin"), getAllUser);

router
  .route("/admin/user/:id")
  .get(isAuthentication, authorizeRoles("admin"), getSingleUser);

export default router;
