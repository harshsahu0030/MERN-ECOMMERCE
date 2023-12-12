import React, { useEffect, useState } from "react";
import "../styles/productdetails.scss";
import Header from "../COMPONENTS/Header";
import BackToTop from "../COMPONENTS/Backtotop";
import StarRateIcon from "@mui/icons-material/StarRate";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useDispatch, useSelector } from "react-redux";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ReviewsIcon from "@mui/icons-material/Reviews";

import {
  addAndRemoveProductFromWishlistAction,
  getProductDetailsAction,
} from "../actions/productAction";
import { useParams } from "react-router-dom";
import { loadUserAction } from "../actions/userAction";
import { useAlert } from "react-alert";
import AvgRatingBox from "../COMPONENTS/product/AvgRatingBox.jsx";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.productDetails);
  const { user } = useSelector((state) => state.user);
  const {
    loading,
    error,
    data: wishlistData,
  } = useSelector((state) => state.wishlist);
  const { id } = useParams();
  const [wishlist, setWishlist] = useState(false);
  const alert = useAlert();

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowForwardIosIcon />,
    prevArrow: <ArrowBackIosIcon />,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    appendDots: (dots) => (
      <div
        style={{
          width: "100%",
          position: "relative",
        }}
      >
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            width: window.innerWidth > 768 ? "80%" : "100%",
            margin: window.innerWidth > 768 ? "auto" : "",
          }}
        >
          {dots}
        </ul>
      </div>
    ),

    customPaging: (i) => (
      <div
        style={{
          display: "flex",
          width: window.innerWidth > 768 ? "7vh" : "5vh",
        }}
      >
        <img
          src={data.product.images[i].url}
          alt=""
          style={{ height: "10vh", objectFit: "cover" }}
        />
      </div>
    ),
  };

  const handleAddAndRemove = () => {
    dispatch(addAndRemoveProductFromWishlistAction(id));
    setWishlist(!wishlist);
    dispatch(loadUserAction());
  };

  useEffect(() => {
    dispatch(getProductDetailsAction(id));

    if (user) {
      if (user.wishlist.includes(id)) {
        setWishlist(true);
      }
    }
  }, [dispatch, id, user]);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (wishlistData && wishlistData.message) {
      alert.success(wishlistData.message);
      dispatch({ type: "clearMessage" });
    }
  }, [alert, error, dispatch, wishlistData]);

  return (
    <>
      <Header />

      <div className="productdetails_container">
        {data && (
          <>
            <div className="productdetails_left">
              <Slider {...settings}>
                {data &&
                  data.product.images.map((img) => (
                    <img key={img.url} src={img.url} alt="" />
                  ))}
              </Slider>
            </div>

            <div className="productdetails_right">
              {/* name, description, ratings */}
              <div className="productDetails_right_box01">
                <div>
                  <h2>{data.product.name}</h2>
                  <p>{data.product.description}</p>
                </div>
                <button>
                  <span>{data.product.ratings}</span> <StarRateIcon /> |{" "}
                  {data.product.reviews.length} &nbsp; Reviews
                </button>
                <button style={{ textTransform: "uppercase" }}>
                  {data.product.gender} | {data.product.category} |{" "}
                  {data.product.type}
                </button>
              </div>

              <hr />

              {/* price, size, addtocart, wishlist */}
              <div className="productDetails_right_box02">
                <div>
                  <h2>
                    Rs. {data.product.price} <span>Rs. {data.product.mrp}</span>{" "}
                    <span>(25% off)</span>
                  </h2>
                  <p>inclusive of all taxes</p>
                </div>

                <div>
                  <p>SELECT SIZE</p>
                  <div>
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                    <button>XXL</button>
                  </div>
                </div>

                <div>
                  <button>ADD TO BAG</button>
                  {wishlist ? (
                    <button disabled={loading} onClick={handleAddAndRemove}>
                      ALREADY IN WISHLIST
                    </button>
                  ) : (
                    <button disabled={loading} onClick={handleAddAndRemove}>
                      ADD TO WISHLIST
                    </button>
                  )}
                </div>
              </div>

              <hr />

              {/* product details */}
              <div className="productDetails_right_box03">
                <h4>
                  PRODUCT DETAILS <ReceiptLongOutlinedIcon />{" "}
                </h4>
                <p>{data.product.productDetails}</p>

                <div>
                  <h4>SIZE & FIT </h4>
                  <p>{data.product.sizeAndFit}</p>
                </div>

                <div>
                  <h4>Material & Care </h4>
                  <p>{data.product.materialAndCare}</p>
                </div>

                <div>
                  <h4>Complete The Look </h4>
                  <p>{data.product.completeLook}</p>
                </div>
              </div>

              <hr />

              {/* rating box */}
              <div className="productdetail_rating box">
                <h4>
                  Ratings <AutoAwesomeIcon />
                </h4>
                <AvgRatingBox />
              </div>

              <hr />

              {/* reviews */}
              <div className="productdetail_reviews">
                <h4>
                  Customer Reviews <ReviewsIcon />
                </h4>
              </div>
            </div>
          </>
        )}
      </div>
      <BackToTop />
    </>
  );
};

export default ProductDetails;
