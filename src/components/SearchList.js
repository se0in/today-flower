import React from 'react';
import { SearchItem } from '../theme/globalStyle';

const SearchList = () => {
  return(
    <SearchItem>
      <div className="img"></div>
      <div className="text">
        <span className='date'>11월 8일</span>
        <span className='name'>민들레</span>
      </div>
    </SearchItem>
  );
};

export default SearchList;