import React from "react";
import "../styles/contact.scss";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Header from "../COMPONENTS/Header";
import BackToTop from "../COMPONENTS/Backtotop";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact_container">
        <div className="contact_left">
          <h2>Contact Us</h2>
          <p>
            We can help. Our team of experts is on hyand to answer your
            questions.
          </p>
          <div className="input_container">
            <input type="text" placeholder="Your Question" />
            <button>Submit</button>
          </div>
          <div className="icons">
            <FacebookRoundedIcon />
            <InstagramIcon />
            <LinkedInIcon />
            <TwitterIcon />
            <YouTubeIcon />
          </div>
        </div>
        <div className="contact_right">
          <img
            src="https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>
      <BackToTop />
    </>
  );
};

export default Contact;
