import React, { useEffect, useState } from "react";
import "../styles/signup.scss";
import Header from "../COMPONENTS/Header";
import BackToTop from "../COMPONENTS/Backtotop";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import User from "../ASSETS/user.png";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(User);
  const [avatarPreview, setAvatarPreview] = useState(User);
  const dispatch = useDispatch();
  const { loading, error, message, user } = useSelector((state) => state.user);
  const alert = useAlert();

  const registerHanlder = (e) => {
    e.preventDefault();
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

  console.log(user);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setAvatarPreview(user.avatar.url);
    }
  }, [user]);

  return (
    <>
      <Header />

      <div className="signup_container">
        <div className="signup_left">
          <h2>Update Profile!</h2>
          <p>Update your profile as your want </p>
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

            <button type="submit" disabled={loading}>
              Update Profile
            </button>
          </form>
        </div>
        <div className="signup_right">
          <img
            src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <BackToTop />
    </>
  );
};

export default UpdateProfile;
