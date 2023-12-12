import React from "react";
import "../../styles/signupbox.scss";
import { useNavigate } from "react-router-dom";

const Signupbox = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  return (
    <div className="signupbox_container">
      <div className="signupbox_left">
        <h2>Get Exclusive Discount And Promotions</h2>
        <p>
          Signup now to get exclusive discount and promotion directly in your
          index.
        </p>
        <div className="signupbox_buttons">
          <button
            onClick={() =>
              isAuthenticated ? navigate("/products") : navigate("/signin")
            }
          >
            Sign In
          </button>
          <button>Learn More</button>
        </div>
      </div>
      <div className="signupbox_right">
        <img
          src="https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
    </div>
  );
};

export default Signupbox;
