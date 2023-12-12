import React from "react";
import "../styles/account.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";
import Header from "../COMPONENTS/Header";
import BackToTop from "../COMPONENTS/Backtotop";
import { logoutUserAction } from "../actions/userAction";
import { useDispatch } from "react-redux";

const Account = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUserAction());
  };
  return (
    <>
      <Header />

      <div className="account_container">
        <div className="account_left">
          <h2>Account</h2>
          <h4>Stay updated in your Fashionable World. </h4>

          <Link to="/profile/update">
            <p>
              Update Profile <KeyboardArrowRightIcon />
            </p>
          </Link>

          <Link to="/password/update">
            <p>
              Update Password <KeyboardArrowRightIcon />
            </p>
          </Link>

          <Link
            style={{ border: "2px solid red" }}
            to="/"
            onClick={logoutHandler}
          >
            <p>
              Logout User <KeyboardArrowRightIcon />
            </p>
          </Link>
        </div>
        <div className="account_right">
          <img
            src="https://media.istockphoto.com/id/1467545053/photo/business-document-icon-webinar-document.jpg?s=612x612&w=0&k=20&c=-4y9ny7y6gd6jJMhCpvVU_fGIUHnN3AwswzNnS1p18o="
            alt=""
          />
        </div>
      </div>
      <BackToTop />
    </>
  );
};

export default Account;
