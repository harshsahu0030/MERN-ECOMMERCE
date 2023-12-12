import React, { useEffect, useState } from "react";
import "../styles/signup.scss";
import { Link } from "react-router-dom";
import Header from "../COMPONENTS/Header";
import BackToTop from "../COMPONENTS/Backtotop";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { registerUserAction } from "../actions/userAction";
import user from "../ASSETS/user.png";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(user);
  const [avatarPreview, setAvatarPreview] = useState(user);
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.user);
  const alert = useAlert();

  const registerHanlder = (e) => {
    e.preventDefault();
    dispatch(registerUserAction(avatar, name, email, password));
  };

  const registerDataChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAvatar(Reader.result);
        setAvatarPreview(Reader.result);
      }
    };
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

      <div className="signup_container">
        <div className="signup_left">
          <h2>Join Us Today!</h2>
          <p>Sign up now to become a part of fashionable family. </p>
          <form className="input_form" onSubmit={registerHanlder}>
            <div className="signup_image_register">
              <img src={avatarPreview} alt="Avatar Preview" />
              <label htmlFor="avatar">Choose Image</label>
              <input
                type="file"
                name="avatar"
                id="avatar"
                accept="image/*"
                onChange={registerDataChange}
                hidden
              />
            </div>

            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
              Sign Up
            </button>
          </form>

          <p>
            Already have account?{" "}
            <Link to="/signin" style={{ color: "rgb(11, 84, 148)" }}>
              Sign in
            </Link>
          </p>
        </div>
        <div className="signup_right">
          <img
            src="https://images.pexels.com/photos/942317/pexels-photo-942317.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>
      <BackToTop />
    </>
  );
};

export default Signup;
