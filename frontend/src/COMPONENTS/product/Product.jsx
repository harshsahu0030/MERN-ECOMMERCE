import React, { useRef } from "react";
import "../../styles/product.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

const Product = ({ item }) => {
  const ref = useRef();
  const navigate = useNavigate();

  const handleProductInfoEnter = () => {
    ref.current.style.opacity = 1;
  };

  const handleProductInfoLeave = () => {
    ref.current.style.opacity = 0;
  };

  return (
    <div
      className="product_container"
      onMouseEnter={handleProductInfoEnter}
      onMouseLeave={handleProductInfoLeave}
    >
      <img src={item.images[0].url} alt="logo" />

      <div className="product_overview">
        <span>
          {item.ratings} <StarIcon />
        </span>
        |<span>{item.reviews.length} reviews</span>
      </div>

      <div className="product_details">
        <h3>{item.name}</h3>
        <p>{item.description}...</p>
        <h4>
          Rs. {item.price} <span>Rs. 456</span> <span>(26% off)</span>
        </h4>
      </div>

      <div
        ref={ref}
        className="product_info"
        onClick={() => navigate(`/product/${item._id}`)}
      >
        <div className="product_icon">
          <SearchOutlinedIcon
            onClick={() => navigate(`/product/${item._id}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
