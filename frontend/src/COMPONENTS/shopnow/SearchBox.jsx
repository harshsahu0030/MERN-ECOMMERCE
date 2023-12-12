import React from "react";
import "../../styles/searchbox.scss";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = () => {
  return (
    <div className="seachbox_outer_container">
      <div className="searchbox_container">
        <div className="searchbox_left">
          <div>
            <SearchIcon />
            <input
              type="text"
              placeholder="Search for products, trends and more"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
