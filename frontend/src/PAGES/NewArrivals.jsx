import React, { useEffect } from "react";
import "../styles/newarrivals.scss";

import Header from "../COMPONENTS/Header";
import FashionImg01 from "../ASSETS/FASHION SHOP STORE 01.png";
import Product from "../COMPONENTS/product/Product";
import BackToTop from "../COMPONENTS/Backtotop";
import { useDispatch, useSelector } from "react-redux";
import { trendingProductsAction } from "../actions/productAction";

const NewArrivals = () => {
  const dispatch = useDispatch();
  const { data: trendData, loading } = useSelector(
    (state) => state.trendingProducts
  );

  useEffect(() => {
    dispatch(trendingProductsAction());
  }, [dispatch]);

  return (
    <>
      <Header />
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="newarrivals_container">
          <img className="newarrivals_poster01" src={FashionImg01} alt="" />

          <h1>NEW ARRIVALS</h1>

          <div className="newarrivals_products">
            {trendData &&
              trendData.products.map((item, index) => (
                <Product key={index} item={item} />
              ))}
          </div>
        </div>
      )}
      <BackToTop />
    </>
  );
};

export default NewArrivals;
