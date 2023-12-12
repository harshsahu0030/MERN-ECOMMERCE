import React, { useEffect, useState } from "react";
import "../styles/login.scss";
import { Link } from "react-router-dom";
import Header from "../COMPONENTS/Header";
import BackToTop from "../COMPONENTS/Backtotop";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../actions/userAction";
import { useAlert } from "react-alert";

const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.user);
  const alert = useAlert();

  const loginHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [alert, error, dispatch, message]);

  return (
    <>
      <Header />

      <div className="login_container">
        <div className="login_left">
          <h2>Update Password!</h2>
          <p>Stay updated in your Fashionable World. </p>
          <form className="input_form" onSubmit={loginHandler}>
            <input
              type="password"
              placeholder="Old Password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button type="submit" disabled={loading}>
              Update Password
            </button>
          </form>
        </div>
        <div className="login_right">
          <img
            src="https://images.pexels.com/photos/259756/pexels-photo-259756.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>
      <BackToTop />
    </>
  );
};

export default UpdatePassword;
