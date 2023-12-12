import UserModel from "../models/userModel.js";
import ProductModel from "../models/productModel.js";
import cloudinary from "cloudinary";

//register user
export const registerUser = async (req, res) => {
  try {
    const { avatar, name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(401).json({
        success: false,
        message: "Please Fill the form",
      });
    }

    const myCloud = await cloudinary.v2.uploader.upload(avatar, {
      folder: "users",
      width: 150,
      crop: "scale",
    });

    const user = await UserModel.create({
      name,
      email,
      password,
      avatar: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
    });

    //generating JWT token
    const token = await user.generateJWTToken();

    // options for cookie
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };

    return res.status(201).cookie("token", token, options).json({
      success: true,
      message: "User Registered Successfully",
      user,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//login user
export const loginUser = async (req, res, next) => {
  try {
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please Fill required details", 400));
  }

  const user = await UserModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(400).json({
      success: false,
      message: "User doen't exist",
    });
  }

  //comparing password
  const isPasswordMatched = await user.matchPassword(password);

  if (!isPasswordMatched) {
    return res.status(401).json({
      success: false,
      message: "Invalid Email and Password",
    });
  }

  //generating JWT token
  const token = await user.generateJWTToken();

  // options for cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  return res.status(200).cookie("token", token, options).json({
    success: true,
    message: "User Login Successfully",
    user,
    token,
  });
};

//load user
export const loadUser = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.user._id);

    return res.status(200).json({
      success: true,
      message: "User load Successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//logout user
export const logoutUser = async (req, res, next) => {
  try {
    // options for cookie
    const options = {
      expires: new Date(Date.now()),
      httpOnly: true,
    };
    return res.status(200).cookie("token", null, options).json({
      success: true,
      message: "User logout Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// update user password
export const updatePassword = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.user.id).select("+password");

    //comparing password
    const isPasswordMatched = await user.matchPassword(req.body.oldPassword);

    if (!isPasswordMatched) {
      return res.status(400).json({
        success: false,
        message: "Old Password Incorrect",
      });
    }

    //checking new password & confirm password are same
    if (req.body.newPassword !== req.body.confirmPassword) {
      return res.status(500).json({
        success: false,
        message: "Password and confirm password are not matching",
      });
    }

    //update password
    user.password = req.body.newPassword;

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password Updated Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//add product in wishlist
export const addAndRemoveProductInWishlist = async (req, res, next) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    const user = await UserModel.findById(req.user.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "product not found",
      });
    }

    if (user.wishlist.includes(req.params.id)) {
      const index = user.wishlist.indexOf(req.params.id);
      user.wishlist.splice(index, 1);

      await user.save();

      return res.status(200).json({
        success: true,
        message: "Product removed from wishlist",
      });
    } else {
      user.wishlist.push(req.params.id);

      await user.save();

      return res.status(200).json({
        success: true,
        message: "Product added in wishlist",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//get all products in wishlist
export const getAllProductsInWishlist = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.user._id).populate("wishlist");

    const products = user.wishlist;

    return res.status(200).json({
      success: true,
      message: "Products in wishlist",
      products,
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

// Get all users(admin)
export const getAllUser = async (req, res, next) => {
  try {
    const users = await UserModel.find();

    return res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get single user (admin)
export const getSingleUser = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: `User does not exist with Id: ${req.params.id}`,
      });
    }

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
