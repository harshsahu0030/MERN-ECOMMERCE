import React from "react";
import "../../styles/shopbox.scss";
import { useNavigate } from "react-router-dom";

const Shopbox = () => {
  const navigate = useNavigate();

  return (
    <div className="shopbox_container">
      <div className="shopbox_left">
        <h2>Shop The Latest Fashion Trends Online</h2>

        <p>
          Explore our collection of stylish clothings and accessories find the
          perfect outfit for any occasion
        </p>

        <div className="shopbox_boxes">
          <div>
            <h3>40% Off</h3>
            <p>Limited time offer show now and sav big</p>
          </div>
          <div>
            <h3>40% Off</h3>
            <p>Don't miss out on these amazing deal shop now</p>
          </div>
        </div>

        <div className="shopbox_buttons">
          <button onClick={() => navigate("/shopnow")}>Shop</button>
          <button>Explore</button>
        </div>
      </div>

      <div className="shopbox_right">
        <img
          src="https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
    </div>
  );
};

export default Shopbox;
