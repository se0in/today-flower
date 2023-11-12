import React, { useState } from "react";
import { SearchInputBox, SearchMenu } from "../theme/globalStyle";
import { BiSearch } from "react-icons/bi";
import '../scss/Search.scss'
import SearchList from './SearchList';

const Search = () => {
  /* 버튼에 따라 다른 검색창 표시 : 기본값은 name 검색*/
  //useState Hook 사용
  const [searchType, setSearchType] = useState("name");
  /* 버튼 색상 : 클릭 상태 추적하고 그에 따라 스타일 변경 */
  const [buttonStyle, setButtonStyle] = useState('');


  const handleButtonClick = (type) => {
    setSearchType(type);
    setButtonStyle('clicked');
  };

  /* 꽃 이름 컴포넌트 */

  return (
    <div className="search">
      <div className='buttonBox'>
        <SearchMenu
        className={`searchMenu ${searchType === 'name' ? 'clicked' : ''}`}  
        onClick={() => handleButtonClick("name")}
        >
          꽃 이름
        </SearchMenu>
        <SearchMenu
        className={`searchMenu ${searchType === 'date' ? 'clicked' : ''}`}  
        onClick={() => handleButtonClick("date")}
        >
          날짜
        </SearchMenu>
      </div>
      {searchType === "name" && (
        <SearchInputBox>
          <input type="text" placeholder="꽃 이름을 검색해주세요" />
          <button className='SearchBtn'>
            <BiSearch className='icon'/>
          </button>
        </SearchInputBox>
      )}
      {searchType === "date" && (<SearchInputBox>
        {/* <input type="date" placeholder="꽃 이름을 검색해주세요" /> */}
        <select name="" id="" required>
          <option value=""selected disabled>월 선택</option>
          <option value="1">1</option>
        </select>
        <select name="" id="">
          <option value="">일 전체</option>
        </select>
        <button className='SearchBtn'>
          <BiSearch className='icon'/>
        </button>
      </SearchInputBox>)}

      <span className='result'>검색 결과</span>
      {/* <ul>
        <SearchList />
        <SearchList />
        <SearchList />
      </ul> */}
      <div className="none">
        <img 
        src={process.env.PUBLIC_URL + './images/logo.svg'} 
        alt="logo" />
        <p>검색 결과가 없습니다.</p>
      </div>
    </div>
  );
};
export default Search;
