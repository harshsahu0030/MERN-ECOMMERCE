import React, { useEffect } from "react";
import "../styles/backtotop.scss";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="backtotop_container" onClick={scrollToTop}>
      Back To Top
    </div>
  );
};

export default BackToTop;
