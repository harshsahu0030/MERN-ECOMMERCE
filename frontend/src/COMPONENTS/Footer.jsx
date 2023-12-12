import React from "react";
import "../styles/footer.scss";
import logo from "../ASSETS/logo.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_left">
        <img src={logo} alt="logo" />
      </div>
      <div className="footer_right">
        <table>
          <thead>
            <tr>
              <th>Explore</th>
              <th>Services</th>
              <th>Follow us</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Our Collection</td>
              <td>Find Answers</td>
              <td>
                <span>
                  <FacebookRoundedIcon />
                  Facebook
                </span>
              </td>
            </tr>
            <tr>
              <td>Latest Styles</td>
              <td>Our Polices</td>
              <td>
                <span>
                  <InstagramIcon />
                  Instagram
                </span>
              </td>
            </tr>
            <tr>
              <td>Our Brand</td>
              <td>Product Fit</td>
              <td>
                <span>
                  <TwitterIcon />X
                </span>
              </td>
            </tr>
            <tr>
              <td>Get Fashion</td>
              <td>Support Team</td>
              <td>
                <span>
                  <LinkedInIcon />
                  Linkedin
                </span>
              </td>
            </tr>
            <tr>
              <td>Our Team</td>
              <td></td>
              <td>
                <span>
                  <YouTubeIcon />
                  Youtube
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Footer;
