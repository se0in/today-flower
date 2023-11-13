import React, { useState } from "react";
import { SearchInputBox, SearchMenu } from "../theme/globalStyle";
import { BiSearch } from "react-icons/bi";
import '../scss/Search.scss'
import SearchList from './SearchList';
import DateSelect from './DateSelect';

const Search = () => {
  const [searchTerm, SetSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  /* 버튼에 따라 다른 검색창 표시 : 기본값은 name 검색*/
  //useState Hook 사용
  const [searchType, setSearchType] = useState("date");
  /* 버튼 색상 : 클릭 상태 추적하고 그에 따라 스타일 변경 */
  const [buttonStyle, setButtonStyle] = useState('');


  /* 버튼 바꾸기 */
  const handleButtonClick = (type) => {
    setSearchType(type);
    setButtonStyle('clicked');
    setSearchResult(null);
  };

  /* 꽃 이름 컴포넌트 */

  return (
    <div className="search">
      <div className='buttonBox'>
        {/* 꽃 이름 버튼 */}
        <SearchMenu
          className={`searchMenu ${searchType === 'name' ? 'clicked' : ''}`}
          onClick={() => handleButtonClick("name")}
        >
          꽃 이름
        </SearchMenu>

        {/* 날짜 버튼 */}
        <SearchMenu
          className={`searchMenu ${searchType === 'date' ? 'clicked' : ''}`}
          onClick={() => handleButtonClick("date")}
        >
          날짜
        </SearchMenu>
      </div>

      {/* 꽃 검색창 */}
      {searchType === "name" && (
        <SearchInputBox>
          <input
            type="text"
            placeholder="꽃 이름을 검색해주세요"
            value={searchTerm}
            onChange={(e) => SetSearchTerm(e.target.value)}
          />
          <button className='SearchBtn'>
            <BiSearch className='icon' />
          </button>
        </SearchInputBox>
      )}

      {/* 날짜 검색 창 */}
      {/* 월별 마지막 날 다르게 설정 */}
      {searchType === "date" && (
        <SearchInputBox>
          <DateSelect />
        </SearchInputBox>
      )}

      {/* 검색 결과 */}
      <span className='result'>검색 결과</span>
      {searchResult ? (

        <ul>
          {
            searchResult.map((item) => (
              <SearchList />
            ))}
        </ul>
      ) : (
        <div className="none">
          <img
            src={process.env.PUBLIC_URL + './images/logo.svg'}
            alt="logo" />
          <p>검색 결과가 없습니다.</p>
        </div>
      )}
    </div>
  );
};
export default Search;