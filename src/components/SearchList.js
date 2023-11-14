import React from 'react';
import { SearchItem } from '../theme/globalStyle';
import { Link } from 'react-router-dom';

const SearchList = ({ data }) => {
  const { flowerName, flowerImgSrc1, flowerMonth, flowerDay } = data || {};

  return (
    <SearchItem>
      <Link to="/detail">

        {flowerImgSrc1 && (
          <div
            className="img"
            style={{
              backgroundImage: `url(${flowerImgSrc1})`,
              backgroundSize: "100%"
            }}
          ></div>
        )}
        <div className="text">
          <span className='date'>{flowerMonth}월 {flowerDay}일</span>
          <span className='name'>{flowerName}</span>
        </div>
      </Link>
    </SearchItem>
  );
};

export default SearchList;