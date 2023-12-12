import React from "react";
import "../../styles/box.scss";
import { Link } from "react-router-dom";

const Box = ({ Info, link }) => {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <div className="box_container">
        <h3>{Info}</h3>
      </div>
    </Link>
  );
};

export default Box;
