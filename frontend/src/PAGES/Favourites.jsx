import React, { useEffect } from "react";
import "../styles/favourites.scss";
import Header from "../COMPONENTS/Header";
import Product from "../COMPONENTS/product/Product";
import BackToTop from "../COMPONENTS/Backtotop";
import { useDispatch, useSelector } from "react-redux";
import { getWishlistProductsAction } from "../actions/productAction";

const Favourites = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getwishlistProducts);

  useEffect(() => {
    dispatch(getWishlistProductsAction());
  }, [dispatch]);
  return (
    <>
      <Header />
      <div className="favourites_container">
        <h1>FAVOURITES</h1>
        <div className="favourites_products">
          {data && data.products.length > 0 ? (
            data.products.map((item, index) => (
              <Product key={index} item={item} />
            ))
          ) : (
            <h2>No Products in your whishlist</h2>
          )}
        </div>
      </div>
      <BackToTop />
    </>
  );
};

export default Favourites;
