import React from "react";
import { SearchItem } from "../theme/globalStyle";
import { Link } from "react-router-dom";

const SearchList = ({ data }) => {
  console.log("data: ", data);
  const { id, flowerName, flowerImgSrc1, month, day } = data || {};

  return (
    <Link to={`/detail/${month}/${day}`}>
      <SearchItem>
        {flowerImgSrc1 && (
          <div
            className="img"
            style={{
              backgroundImage: `url(${flowerImgSrc1})`,
              backgroundSize: "100%",
            }}
          ></div>
        )}
        <div className="text">
          <span className="date">
            {month}월 {day}일
          </span>
          <span className="name">{flowerName}</span>
        </div>
      </SearchItem>
    </Link>
  );
};

export default SearchList;
