import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter product Description"],
  },
  mrp: {
    type: Number,
    required: [true, "Please Enter product Price"],
    maxLength: [5, "Price cannot exceed 8 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter product Price"],
    maxLength: [5, "Price cannot exceed 8 characters"],
  },
  discount: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: [true, "Please Enter product category -- category"],
  },

  category: {
    type: String,
    required: [true, "Please Enter product category -- Category"],
  },

  type: {
    type: String,
    required: [true, "Please Enter product category -- type"],
  },
  sizes: [],
  color: {
    type: String,
    requres: true,
  },
  stock: {
    type: Number,
    required: [true, "Please Enter product Stock"],
    maxLength: [4, "Stock cannot exceed 4 characters"],
    default: 1,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  productDetails: {
    type: String,
    required: [true, "Please Enter product  details"],
  },
  sizeAndFit: {
    type: String,
    required: [true, "Please Enter product size and Fit"],
  },
  materialAndCare: {
    type: String,
    required: [true, "Please Enter product material and care"],
  },
  completeLook: {
    type: String,
    required: [true, "Please Enter product complete look"],
  },
  ordered: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],

  action: {
    type: String,
    default: "active",
  },

  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Product", productSchema);
