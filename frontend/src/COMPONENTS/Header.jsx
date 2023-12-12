import React, { useEffect, useRef, useState } from "react";
import "../styles/header.scss";
import Logo from "../ASSETS/logo.png";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useSelector } from "react-redux";

const Header = () => {
  const [path, setPath] = useState(window.location.pathname);
  const navigate = useNavigate();
  const ref = useRef();
  const [toggle, settoggle] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const handleOpenSidebar = () => {
    ref.current.style.width = "100%";
    ref.current.style.left = "0";
    settoggle(!toggle);
  };

  const handleCloseSidebar = () => {
    ref.current.style.width = "0";
    ref.current.style.left = "100%";
    settoggle(!toggle);
  };

  const handleLogo = () => {
    navigate("/");
    setPath("/");
  };

  useEffect(() => {}, []);

  return (
    <div className="header_container">
      <div className="header_wrapper">
        <div className="header_left">
          <img src={Logo} alt="logo" onClick={handleLogo} />
        </div>
        <div className="header_center">
          <Link to="/" onClick={() => setPath("/")}>
            {path === "/" ? (
              <span style={{ color: "#0b5394", fontWeight: "700" }}>Home</span>
            ) : (
              <span>Home</span>
            )}
          </Link>
          <Link to="/shopnow" onClick={() => setPath("/shopnow")}>
            {path === "/shopnow" ? (
              <span style={{ color: "#0b5394", fontWeight: "700" }}>
                Shop Now
              </span>
            ) : (
              <span>Shop Now</span>
            )}
          </Link>
          <Link to="/newarrivals" onClick={() => setPath("/newarrivals")}>
            {path === "/newarrivals" ? (
              <span style={{ color: "#0b5394", fontWeight: "700" }}>
                New Arrivals
              </span>
            ) : (
              <span>New Arrivals</span>
            )}
          </Link>
          <Link to="/products" onClick={() => setPath("/products")}>
            {path === "/products" ? (
              <span style={{ color: "#0b5394", fontWeight: "700" }}>
                Products
              </span>
            ) : (
              <span>Products</span>
            )}
          </Link>

          <Link to="/contact" onClick={() => setPath("/contact")}>
            {path === "/contact" ? (
              <span style={{ color: "#0b5394", fontWeight: "700" }}>
                Contact
              </span>
            ) : (
              <span>Contact</span>
            )}
          </Link>
        </div>

        <div className="header_right">
          <div className="icons">
            <Link to="/favourites" onClick={() => setPath("/favourites")}>
              {path === "/favourites" ? (
                <FavoriteIcon style={{ color: "red" }} />
              ) : (
                <FavoriteBorderOutlinedIcon />
              )}
            </Link>

            {isAuthenticated ? (
              <div className="header_user">
                <Link to="/account" onClick={() => setPath("/account")}>
                  <p>Hello,</p>
                  <p>{user.name.split(" ")[0]}</p>
                </Link>
              </div>
            ) : (
              <Link to="/signin" onClick={() => setPath("/signin")}>
                {path === "/signin" ? (
                  <AccountCircleIcon />
                ) : (
                  <AccountCircleOutlinedIcon />
                )}
              </Link>
            )}

            <Link to="/cart" onClick={() => setPath("/cart")}>
              {path === "/cart" ? (
                <LocalMallIcon style={{ color: "green" }} />
              ) : (
                <LocalMallOutlinedIcon />
              )}
            </Link>
          </div>
          <div className="icon">
            {toggle === true ? (
              <CloseIcon onClick={handleCloseSidebar} />
            ) : (
              <MenuIcon onClick={handleOpenSidebar} />
            )}
          </div>
        </div>
      </div>

      <div ref={ref} className="toggle_container">
        <Link to="/" onClick={handleCloseSidebar}>
          Home <KeyboardArrowRightIcon />
        </Link>
        <Link to="/shopnow" onClick={handleCloseSidebar}>
          Shop Now <KeyboardArrowRightIcon />
        </Link>
        <Link to="/newarrivals" onClick={handleCloseSidebar}>
          New Arriavals <KeyboardArrowRightIcon />
        </Link>
        <Link to="/products" onClick={handleCloseSidebar}>
          Products <KeyboardArrowRightIcon />
        </Link>
        <Link to="/favourites" onClick={handleCloseSidebar}>
          Favourites <KeyboardArrowRightIcon />
        </Link>
        <Link to="/account" onClick={handleCloseSidebar}>
          Account <KeyboardArrowRightIcon />
        </Link>
        <Link to="/cart" onClick={handleCloseSidebar}>
          Cart <KeyboardArrowRightIcon />
        </Link>
      </div>
    </div>
  );
};

export default Header;
