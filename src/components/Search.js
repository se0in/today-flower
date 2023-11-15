import React, { useEffect, useState } from "react";
import { SearchInputBox, SearchMenu } from "../theme/globalStyle";
import { BiSearch } from "react-icons/bi";
import '../scss/Search.scss'
import SearchList from './SearchList';
import DateSelect from './DateSelect';
import { fetchData, fetchDataName } from '../server/server';
import Loading from './Loading';

const Search = ({data}) => {
  const [searchResult, setSearchResult] = useState(null);
  const [searchType, setSearchType] = useState("name");
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [flowerData, setFlowerData] = useState({
    id: "",
    flowerName: "",
    flowerImg1: "",
    flowerMonth: "",
    flowerDay: "",
  })
  useEffect(() => {
  }, []);

  /* 버튼 바꾸기 */
  const handleButtonClick = (type) => {
    setSearchType(type);
    setSearchResult(null);

  };

  console.log(searchTerm);
  const handleNameSearch = async () => {
    try {
      const data = await fetchDataName(searchTerm);
  
      if (data && Array.isArray(data.flowerName)) {
/*         const searchData = data.flowerName.map((name, index) => ({
          id: index,
          flowerName: name,
          month: data.month[index],
          day: data.day[index],
          flowerImgSrc1: data.flowerImg1[index],
          
        })); */
  
        setFlowerData({
          ...flowerData,
            flowerName: data.flowerName,
            flowerLang: data.flowerLang,
            flowerMonth: data.flowerMonth,
            flowerDay: data.flowerDay,
            flowerImg1: data.flowerImgSrc1,
        });
        setSearchResult([data]);
  
        console.log('flowerLanguage: ', data.flowerLang);
      } else {
        setSearchResult([]);
      }
    } catch (error) {
      console.error('데이터를 불러오는 중 오류 발생:', error);
    } finally {
      setLoading(false);
    }
  };

  // 날짜 검색
  const handleDateSearch = async (selectedDates) => {

    if (Array.isArray(selectedDates)) {
      // 여러 날짜의 배열 처리
      try {
        const promises = selectedDates.map(async (dateString) => {
          const [month, day] = dateString.split('-').map(Number);
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
      const [month, day] = selectedDates.split('-').map(Number);
      try {
        const data = await fetchData(month, day);
        if (data) {
          // 단일 날짜의 데이터 처리
          setFlowerData({
            ...flowerData,
            flowerName: data.flowerName,
            flowerLang: data.flowerLang,
            flowerMonth: data.flowerMonth,
            flowerDay: data.flowerDay,
            flowerImg1: data.flowerImgSrc1,
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
          <button className='SearchBtn' onClick={handleNameSearch} >
            <BiSearch className='icon' />
          </button>
        </SearchInputBox>
      )}

      {/* 날짜 검색 창 */}
      {/* 월별 마지막 날 다르게 설정 */}
      {searchType === "date" && (
        <SearchInputBox>
          <DateSelect handleSearch={handleDateSearch} />
        </SearchInputBox>
      )}

      {/* 검색 결과 */}

      <span className='result'>검색 결과</span>
      {searchResult && Array.isArray(searchResult) ? (
        <div>
          {searchResult.map((item) => (
            <SearchList key={item.id} data={item} />
          ))}

        </div>
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