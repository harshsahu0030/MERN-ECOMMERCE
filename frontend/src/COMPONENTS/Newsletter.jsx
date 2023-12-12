import React from "react";
import "../styles/newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter_container">
      <div className="newsletter_wrapper">
        <h2>
          Stay Update With Our <br /> Newsletter{" "}
        </h2>
        <p>
          Subscribe to our newsletter for the lastest update on new arrivals and
          sales.
        </p>
        <div className="input_container">
          <input type="text" placeholder="Your Email Here" />
          <button>Join Now</button>
        </div>
        <p>By joinning us, we the part of your family </p>
      </div>
    </div>
  );
};

export default Newsletter;
