import React from "react";
import "../../styles/avgratingbox.scss";
import GradeIcon from "@mui/icons-material/Grade";

const AvgRatingBox = () => {
  return (
    <div className="avgratingbox_container">
      <div>
        <h2>
          4.1 <GradeIcon />
        </h2>
        <p>145 Verified Orders</p>
      </div>
      <div>
        <div className="avgratingbox_inputs">
          <span>
            5 <GradeIcon />
          </span>
          <div>
            <div style={{ width: "50%", backgroundColor: "#6aa84f" }}></div>
          </div>
          <span>96</span>
        </div>
        <div className="avgratingbox_inputs">
          <span>
            4 <GradeIcon />
          </span>
          <div>
            <div style={{ width: "50%", backgroundColor: "#45818e" }}></div>
          </div>
          <span>96</span>
        </div>
        <div className="avgratingbox_inputs">
          <span>
            3 <GradeIcon />
          </span>
          <div>
            <div style={{ width: "50%", backgroundColor: "#f1c232" }}></div>
          </div>
          <span>96</span>
        </div>
        <div className="avgratingbox_inputs">
          <span>
            2 <GradeIcon />
          </span>
          <div>
            <div style={{ width: "50%", backgroundColor: "#e69138" }}></div>
          </div>
          <span>96</span>
        </div>
        <div className="avgratingbox_inputs">
          <span>
            1 <GradeIcon />
          </span>
          <div>
            <div style={{ width: "50%", backgroundColor: "#cc0000" }}></div>
          </div>
          <span>96</span>
        </div>
      </div>
    </div>
  );
};

export default AvgRatingBox;
