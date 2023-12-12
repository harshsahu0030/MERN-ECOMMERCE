import productModel from "../models/productModel.js";
import ProductModel from "../models/productModel.js";
import ApiFeatures from "../utils/apiFeatures.js";
import cloudinary from "cloudinary";

//get all products
export const getAllProducts = async (req, res, next) => {
  try {
    const resultPerPage = 18;
    const productsCount = await ProductModel.countDocuments();

    const apiFeature = new ApiFeatures(ProductModel.find(), req.query)
      .search()
      .filter();

    let products = await apiFeature.query;

    let filteredProductsCount = products.length;

    apiFeature.pagination(resultPerPage);

    return res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      filteredProductsCount,
      productsCount,
      resultPerPage,
      products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// products trending
export const trendingProducts = async (req, res) => {
  try {
    const resultPerPage = 18;
    const productsCount = await ProductModel.countDocuments();

    const apiFeature = new ApiFeatures(
      ProductModel.find().sort({ ordered: -1 }),
      req.query
    )
      .search()
      .filter();

    let products = await apiFeature.query;

    let filteredProductsCount = products.length;

    apiFeature.pagination(resultPerPage);

    return res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      filteredProductsCount,
      productsCount,
      resultPerPage,
      products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// products top-rated
export const topRatedProducts = async (req, res) => {
  try {
    const resultPerPage = 18;
    const productsCount = await ProductModel.countDocuments();

    const apiFeature = new ApiFeatures(
      ProductModel.find().sort({ ratings: -1 }),
      req.query
    )
      .search()
      .filter();
    let products = await apiFeature.query;

    let filteredProductsCount = products.length;

    apiFeature.pagination(resultPerPage);

    return res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      filteredProductsCount,
      productsCount,
      resultPerPage,
      products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// products top-selleing
export const topSellingProducts = async (req, res) => {
  try {
    const resultPerPage = 18;
    const productsCount = await ProductModel.countDocuments();

    const apiFeature = new ApiFeatures(
      ProductModel.find().sort({ ordered: -1 }),
      req.query
    )
      .search()
      .filter();

    let products = await apiFeature.query;

    let filteredProductsCount = products.length;

    apiFeature.pagination(resultPerPage);

    return res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      filteredProductsCount,
      productsCount,
      resultPerPage,
      products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//get single product details
export const getSingleProductDetails = async (req, res, next) => {
  try {
    const product = await ProductModel.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "product not found",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Product Details fetched successfully",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//add and update review on product
export const addAndUpdateReviewOnProduct = async (req, res, next) => {
  try {
    const { rating, comment, productId } = req.body;

    const review = {
      user: req.user._id,
      name: req.user.name,
      rating: Number(rating),
      comment,
    };

    const product = await ProductModel.findById(req.params.id);

    const isReviewed = product.reviews.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isReviewed) {
      product.reviews.forEach((rev) => {
        if (rev.user.toString() === req.user._id.toString())
          (rev.rating = rating), (rev.comment = comment);
      });
    } else {
      product.reviews.push(review);
      product.numOfReviews = product.reviews.length;
    }

    let avg = 0;

    product.reviews.forEach((rev) => {
      avg += rev.rating;
    });

    product.ratings = avg / product.reviews.length;

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.stack,
    });
  }
};

//get All product review
export const getAllProductReviews = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "product not found",
      });
      F;
    }

    res.status(200).json({
      success: true,
      message: `Reviews of ${product.name}`,
      reviews: product.reviews,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//delete product review
export const deleteProductReview = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      message: "Product review deleted",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//----------------------------------------------------------------------

//admin routes

//create product (admin)
export const createNewProduct = async (req, res, next) => {
  try {
    const { mrp, price } = req.body;

    const productDiscount = Math.floor(((mrp - price) / mrp) * 100);

    let imagesArr = [];

    if (typeof req.body.images === "string") {
      imagesArr.push(req.body.images);
    } else {
      imagesArr = req.body.images;
    }

    const imagesLinks = [];

    for (let i = 0; i < imagesArr.length; i++) {
      const result = await cloudinary.v2.uploader.upload(imagesArr[i], {
        folder: "products",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;

    const productDetails = {
      ...req.body,
      user: req.user._id,
      discount: productDiscount,
    };

    const product = await ProductModel.create(productDetails);

    return res.status(201).json({
      success: true,
      message: "Create Product Successfully",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.stack,
    });
  }
};

//update product (admin)
export const updateProduct = async (req, res, next) => {
  try {
    let product = await ProductModel.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "product not found",
      });
    }

    product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    return res.status(200).json({
      success: true,
      message: "Product update successfully",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//get all products (admin)
export const getAllProductsAdmin = async (req, res, next) => {
  try {
    const products = await ProductModel.find();

    return res.status(201).json({
      success: true,
      message: "Products fetched successfully",
      products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//get single product (admin)
export const getSingleProductAdmin = async (req, res, next) => {
  try {
    const product = await ProductModel.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "product not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//delete product (admin)
export const deleteProduct = async (req, res, next) => {
  try {
    const product = await ProductModel.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "product not found",
      });
    }

    await product.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
