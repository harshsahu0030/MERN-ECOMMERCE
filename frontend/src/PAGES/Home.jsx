import React from "react";
import "../styles/home.scss";
import HomeTop from "../COMPONENTS/home/HomeTop.jsx";
import Signupbox from "../COMPONENTS/home/SIgnupbox.jsx";
import CategoriesBox from "../COMPONENTS/home/CategoriesBox.jsx";
import Shopbox from "../COMPONENTS/home/Shopbox.jsx";
import Header from "../COMPONENTS/Header.jsx";
import BackToTop from "../COMPONENTS/Backtotop.jsx";
import Newsletter from "../COMPONENTS/Newsletter.jsx";
import { useSelector } from "react-redux";

const Home = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <Header />
      <div className="home_container">
        <HomeTop />
        <CategoriesBox />
        <Shopbox />
        <Signupbox isAuthenticated={isAuthenticated} />
        <Newsletter />
        <BackToTop />
      </div>
    </>
  );
};

export default Home;
