import React from 'react';
import { SearchItem } from '../theme/globalStyle';

const SearchList = ({data}) => {
  const {date, name, flowerImgSrc1} = data;
  
  return(
    <SearchItem>
      {flowerImgSrc1 && (
        <div
          className="img"
          style={{ backgroundImage: `url(${flowerImgSrc1})` }}
        ></div>
      )}
      <div className="text">
        <span className='date'>{date}</span>
        <span className='name'>{name}</span>
      </div>
    </SearchItem>
  );
};

export default SearchList;