import React from "react";
import "../../styles/hometop.scss";
import { useNavigate } from "react-router-dom";

const HomeTop = () => {
  const navigate = useNavigate();

  return (
    <div className="slider_container">
      <div className="slider_left">
        <h2>Discover The Hottest Clothing Trends Now!</h2>
        <p>
          Stay ahead of the fashionwith our latest collection shop now and enjoy
          exclusive promotion.
        </p>
        <div className="slider_buttons">
          <button onClick={() => navigate("/shopnow")}>Shop</button>
          <button>Explore</button>
        </div>
      </div>
      <div className="slider_right">
        <img
          src="https://images.pexels.com/photos/1877736/pexels-photo-1877736.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeTop;
