import React, { useEffect } from "react";
import "../styles/shopnow.scss";
import FashionImg02 from "../ASSETS/FASHION SHOP STORE 02.png";
import FashionImg04 from "../ASSETS/FASHION SHOP STORE 04.png";
import FashionImg05 from "../ASSETS/FASHION SHOP STORE 05.png";
import FashionImg06 from "../ASSETS/FASHION SHOP STORE 06.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link, useNavigate } from "react-router-dom";
import Header from "../COMPONENTS/Header";
import Product from "../COMPONENTS/product/Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BackToTop from "../COMPONENTS/Backtotop";
import { useDispatch, useSelector } from "react-redux";
import {
  topRatedProductsAction,
  topSellingProductsAction,
  trendingProductsAction,
} from "../actions/productAction.js";

const Shopnow = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: trendData, loading: trendLoad } = useSelector(
    (state) => state.trendingProducts
  );
  const { data: ratedData, loading: ratedLoad } = useSelector(
    (state) => state.topRatedProducts
  );
  const { data: sellingData, loading: sellingLoad } = useSelector(
    (state) => state.topSellingProducts
  );

  useEffect(() => {
    dispatch(trendingProductsAction());
    dispatch(topRatedProductsAction());
    dispatch(topSellingProductsAction());
  }, [dispatch]);

  const settings = {
    dots: window.innerWidth > 768 ? true : false,
    infinite: false,
    speed: 1000,
    slidesToShow: window.innerWidth > 768 ? 4 : 2,
    slidesToScroll: window.innerWidth > 768 ? 4 : 2,
    nextArrow: <ArrowForwardIosIcon />,
    prevArrow: <ArrowBackIosIcon />,
  };

  return (
    <>
      <Header />
      {trendLoad && sellingLoad && ratedLoad ? (
        <h1>Loading</h1>
      ) : (
        <div className="shopnow_container">
          <img
            onClick={() => navigate("/newarrivals")}
            className="shopnow_poster02"
            src={FashionImg02}
            alt=""
          />

          <h1>
            TRENDING{" "}
            <Link to="/products">
              see all <KeyboardArrowRightIcon />
            </Link>
          </h1>

          <div className="shopnow_products_container">
            <div className="shopnow_products">
              <Slider {...settings}>
                {trendData &&
                  trendData.products.map((item, index) => (
                    <Product key={index} item={item} />
                  ))}
              </Slider>
            </div>
          </div>

          <div className="shopnow_banner">
            <img
              onClick={() => navigate("/newarrivals")}
              className="shopnow_poster01"
              src={FashionImg04}
              alt=""
            />
            <img
              onClick={() => navigate("/newarrivals")}
              className="shopnow_poster01"
              src={FashionImg05}
              alt=""
            />
          </div>

          <h1>
            TOP RATED{" "}
            <Link to="/products">
              see all <KeyboardArrowRightIcon />
            </Link>
          </h1>
          <div className="shopnow_products_container">
            <div className="shopnow_products">
              <Slider {...settings}>
                {ratedData &&
                  ratedData.products.map((item, index) => (
                    <Product key={index} item={item} />
                  ))}
              </Slider>
            </div>
          </div>

          <h1>
            TOP SELLERS{" "}
            <Link to="/products">
              see all <KeyboardArrowRightIcon />
            </Link>
          </h1>
          <div className="shopnow_products_container">
            <div className="shopnow_products">
              <Slider {...settings}>
                {sellingData &&
                  sellingData.products.map((item, index) => (
                    <Product key={index} item={item} />
                  ))}
              </Slider>
            </div>
          </div>

          <img
            onClick={() => navigate("/newarrivals")}
            className="shopnow_poster02"
            src={FashionImg06}
            alt=""
          />
        </div>
      )}
      <BackToTop />
    </>
  );
};

export default Shopnow;
