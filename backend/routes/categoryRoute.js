import express from "express";
import {
  createCategory,
  createGender,
  createVariant,
  createtype,
  getCategories,
} from "../controllers/categoryController.js";
import { authorizeRoles, isAuthentication } from "../middlewares/auth.js";

const router = express.Router();

//get category
router.route("/categories").get(getCategories);

// create gender
router
  .route("/admin/gender/new")
  .post(isAuthentication, authorizeRoles("admin"), createGender);

// create category
router
  .route("/admin/category/new")
  .post(isAuthentication, authorizeRoles("admin"), createCategory);

// create type
router
  .route("/admin/type/new")
  .post(isAuthentication, authorizeRoles("admin"), createtype);

// create variant
router
  .route("/admin/variant/new")
  .post(isAuthentication, authorizeRoles("admin"), createVariant);

export default router;
