import React, { useState } from "react";
import { fetchData, fetchDataName } from "../server/server";
import SearchList from "./SearchList";
import DateSelect from "./DateSelect";
import Loading from './Loading';
import { SearchInputBox, SearchMenu } from "../theme/globalStyle";
import "../scss/Search.scss";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [searchType, setSearchType] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [flowerData, setFlowerData] = useState();

  /* 버튼 변경 */
  const handleButtonClick = (type) => {
    setSearchType(type);
    setSearchResult(null);
  };

  const handleNameSearch = async () => {
    setLoading(true);
    try {
      const data = await fetchDataName(searchTerm);

      if (Array.isArray(data) && data.length > 0) {
        const searchData = data.map((item, index) => ({
          /* 필수 */
          id: index,
          flowerName: item.flowerName,
          month: item.month,
          day: item.day,
          flowerImgSrc1: item.flowerImg1,
        }));

        setSearchResult(searchData);
        //주석 지우지 말 것
        /* } else if (data && !Array.isArray(data)) {
          const searchData = data.flowerName.map((name, index) => ({
            id: index,
            flowerName: name,
            month: data.month[index],
            day: data.day[index],
            flowerImgSrc1: data.flowerImg1[index],
          })); */

        setSearchResult(searchData);
      } else {
        setSearchResult(null);
      }
    } catch (error) {
      console.error("데이터를 불러오는 중 오류 발생:", error);
    } finally {
      setLoading(false);
    }
  };

  // 날짜 검색
  const handleDateSearch = async (selectedDates) => {
    setLoading(true);
    if (Array.isArray(selectedDates)) {
      // 여러 날짜의 배열 처리
      try {
        const promises = selectedDates.map(async (dateString) => {
          const [month, day] = dateString.split("-").map(Number);
          return fetchData(month, day);
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
      const [month, day] = selectedDates.split("-").map(Number);
      try {
        const data = await fetchData(month, day);
        if (data) {
          // 단일 날짜 데이터 처리
          setFlowerData({
            ...flowerData,
          });
          setSearchResult([data]);
        }
      } catch (error) {
        console.error("단일 날짜의 데이터를 불러오는 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="search">
      {/* 검색 카테고리 버튼 */}
      <div className="buttonBox">
        <SearchMenu
          className={`searchMenu ${searchType === "name" ? "clicked" : ""}`}
          onClick={() => handleButtonClick("name")}
        >꽃 이름</SearchMenu>
        <SearchMenu
          className={`searchMenu ${searchType === "date" ? "clicked" : ""}`}
          onClick={() => handleButtonClick("date")}
        >날짜</SearchMenu>
      </div>

      {/* 꽃 검색 input */}
      {searchType === "name" && (
        <SearchInputBox>
          <input
            type="text"
            placeholder="꽃 이름을 검색해주세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleNameSearch()
              }
            }}
          />
          <button
            className="SearchBtn"
            onClick={handleNameSearch}>
            <BiSearch className="icon" />
          </button>
        </SearchInputBox>
      )}

      {/* 날짜 검색 input */}
      {searchType === "date" && (
        <SearchInputBox>
          <DateSelect handleSearch={handleDateSearch} />
        </SearchInputBox>
      )}
      {/* 검색 결과 */}
      <span className="result">검색 결과 {searchResult ? searchResult.length : ""}</span>
      {loading ? (<Loading />) :
        searchResult && Array.isArray(searchResult) ? (
          <div className='listBox'>
            {searchResult.map((item, index) => (
              <SearchList key={index} data={item} />
            ))}
          </div>
        ) : (
          <div className="none">
            <img src={process.env.PUBLIC_URL + "./images/logo.svg"} alt="logo" />
            <p>검색 결과가 없습니다.</p>
          </div>
        )}
    </div>
  );
};
export default Search;