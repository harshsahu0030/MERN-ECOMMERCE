import React, { useEffect, useState } from "react";
import "../styles/login.scss";
import { Link } from "react-router-dom";
import Header from "../COMPONENTS/Header";
import BackToTop from "../COMPONENTS/Backtotop";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../actions/userAction";
import { useAlert } from "react-alert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.user);
  const alert = useAlert();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUserAction(email, password));
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
          <h2>Welcome Back!</h2>
          <p>Stay updated in your Fashionable World. </p>
          <form className="input_form" onSubmit={loginHandler}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" disabled={loading}>
              Sign In
            </button>
          </form>

          <p>
            New User? Click here to{" "}
            <Link to="/signup" style={{ color: "rgb(11, 84, 148)" }}>
              Sign Up
            </Link>
          </p>
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

export default Login;
