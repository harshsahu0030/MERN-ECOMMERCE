import React from "react";
import "../../styles/categoriesbox.scss";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const CategoriesBox = () => {
  return (
    <div className="categoriesbox_container">
      <h2>
        Discover Our Extensive Collection of <br />
        Clothings
      </h2>
      <div className="categoriesbox_wrapper">
        <div className="box">
          <div className="top">
            <img
              src="https://images.pexels.com/photos/356170/pexels-photo-356170.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="bottom">
            <h3>Explore Our Stylish Women's Fashion Collection</h3>
            <p>Find the perfect to complete your look</p>
            <Link to="/shopnow">
              Shop <KeyboardArrowRightIcon />
            </Link>
          </div>
        </div>
        <div className="box">
          <div className="top">
            <img
              src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="bottom">
            <h3>Get ready to be inspired, empowered, and enlightened</h3>
            <p>Let see the comfortable outfit for you </p>
            <Link to="/shopnow">
              Shop <KeyboardArrowRightIcon />
            </Link>
          </div>
        </div>
        <div className="box">
          <div className="top">
            <img
              src="https://images.pexels.com/photos/1928927/pexels-photo-1928927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="bottom">
            <h3>Find Your Perfect Outfit From Our Women's Collection</h3>
            <p>For stylish women's clothing</p>
            <Link to="/shopnow">
              Shop <KeyboardArrowRightIcon />
            </Link>
          </div>
        </div>
        <div className="box">
          <div className="top">
            <img
              src="https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="bottom">
            <h3>Upgrade Your Wardrobe With Trendy Men's Clothing</h3>
            <p>Discover the latest brand for men</p>
            <Link to="/shopnow">
              Shop <KeyboardArrowRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesBox;
