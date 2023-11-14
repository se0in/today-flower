import React, { useEffect, useState } from "react";
import { SearchInputBox, SearchMenu } from "../theme/globalStyle";
import { BiSearch } from "react-icons/bi";
import '../scss/Search.scss'
import SearchList from './SearchList';
import DateSelect from './DateSelect';
import { fetchData } from '../server/server';

const Search = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [searchType, setSearchType] = useState("date");
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [flowerData, setFlowerData] = useState({
    flowerName: "",
    flowerImg1: "",
    flowerMonth: "",
  })
  useEffect(() => {
  }, []);



  /* 버튼 바꾸기 */
  const handleButtonClick = (type) => {
    setSearchType(type);
    setSearchResult(null);
  };



  const handleSearch = async (selectedDates) => {
    if (Array.isArray(selectedDates)) {
      // 여러 날짜의 배열 처리
      try {
        const promises = selectedDates.map(async (dateString) => {
          const [month, day] = dateString.split('-').map(Number);
          return fetchData(month, day, searchTerm);
        });

        const searchData = await Promise.all(promises);
        setSearchResult(searchData);
      } catch (error) {
        console.error("여러 날짜의 데이터를 불러오는 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    } else {
      // 단일 날짜 처리
      const [month, day] = selectedDates.split('-').map(Number);
      try {
        const data = await fetchData(month, day, searchTerm);
        if (data) {
          // 단일 날짜의 데이터 처리
          setFlowerData({
            ...flowerData,
            flowerName: data.flowerName,
            flowerLang: data.flowerLang,
            flowerMonth: data.flowerMonth,
            flowerDay: data.flowerDay,
            flowerImg1: data.flowerImgSrc1,
            flowerImg2: data.flowerImgSrc2,
            flowerImg3: data.flowerImgSrc3,
          });
          setSearchResult([data]); // 검색 결과 설정
        }
      } catch (error) {
        console.error("단일 날짜의 데이터를 불러오는 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    };
  }

  return (
    <div className="search">
      <div className='buttonBox'>
        {/* 꽃 이름 버튼 */}
        <SearchMenu
          className={`searchMenu ${searchType === 'name' ? 'clicked' : ''}`}
          onClick={() => handleButtonClick("name")}
        >꽃 이름</SearchMenu>
        {/* 날짜 버튼 */}
        <SearchMenu
          className={`searchMenu ${searchType === 'date' ? 'clicked' : ''}`}
          onClick={() => handleButtonClick("date")}
        >날짜</SearchMenu>
      </div>

      {/* 꽃 검색창 */}
      {searchType === "name" && (
        <SearchInputBox>
          <input
            type="text"
            placeholder="꽃 이름을 검색해주세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='SearchBtn' onClick={handleSearch} >
            <BiSearch className='icon' />
          </button>
        </SearchInputBox>
      )}

      {/* 날짜 검색 창 */}
      {/* 월별 마지막 날 다르게 설정 */}
      {searchType === "date" && (
        <SearchInputBox>
          <DateSelect handleSearch={handleSearch} />
        </SearchInputBox>
      )}

      {/* 검색 결과 */}
      <span className='result'>검색 결과</span>
      {!loading ? (
        searchResult && Array.isArray(searchResult) ? (
          <div>
            {searchResult.map((item, index) => (
              <SearchList key={index} data={item} />
            ))}
          </div>
        ) : (
          <div className="none">
            <img
              src={process.env.PUBLIC_URL + './images/logo.svg'}
              alt="logo" />
            <p>검색 결과가 없습니다.</p>
          </div>
        )
      ) : (
        // 로딩 중 표시
        <p>로딩 중...</p>
      )}
    </div>
  );
};
export default Search;