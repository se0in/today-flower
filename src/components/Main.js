import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from '../server/server';
import { PointText, SubText } from "../theme/globalStyle";
import { MainSwiper } from "./Swiper";
import Loading from './Loading';
import ThemeBtn from "./ThemeBtn";
import "../scss/Main.scss";
import { FiArrowRight } from "react-icons/fi";

function Main({ toggleTheme, themeMode }) {
  const [loading, setLoading] = useState(true);
  const [flowerData, setFlowerData] = useState({
    currentDate: "",
    flowerName: "",
    flowerLang: "",
    flowerImg1: "",
    flowerImg2: "",
    flowerImg3: "",
  })

  // 오늘 날짜 : 데이터, Link
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  //데이터 연결
  const fetchFlowerData = useCallback(async () => {
    const formattedDate = `${month}월 ${day}일`;
    setFlowerData((dataList) => ({ ...dataList, currentDate: formattedDate }));

    try {
      const data = await fetchData(month, day);
      if (data) {
        setFlowerData((dataList) => ({
          ...dataList,
          flowerName: data.flowerName,
          flowerLang: data.flowerLang,
          flowerImg1: data.flowerImgSrc1,
          flowerImg2: data.flowerImgSrc2,
          flowerImg3: data.flowerImgSrc3,
        }))
      }
    } catch (error) {
      console.error("Error fetching data :", error);
    } finally {
      setLoading(false);
    }
  }, [month, day]);
  
  useEffect(() => {
    fetchFlowerData();
  }, [fetchFlowerData]);


  // 로딩
  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }

    return (
      <div className="main">
        <div className="todayTextWrap">
          <SubText className="today">{flowerData.currentDate}</SubText>
          <p className="title">오늘의 꽃은</p>
          <PointText className="flowerName">{flowerData.flowerName}</PointText>
          <PointText className="flowerLang">: {flowerData.flowerLang}</PointText>
        </div>
        <div className="todayImgWrap">
          <MainSwiper
            imgSrc1={flowerData.flowerImg1}
            imgSrc2={flowerData.flowerImg2}
            imgSrc3={flowerData.flowerImg3}
            flowerName={flowerData.flowerName}
          />
        </div>
        <Link to={`/detail/${month}/${day}`}>
          <button className="todayMoreBtn">
            <span>오늘의 꽃 정보</span>
            <FiArrowRight className="icon" />
          </button>
        </Link>
        <div className="themeWrap">
          <ThemeBtn toggleTheme={toggleTheme} themeMode={themeMode} />
        </div>
      </div>
    );
  }
  /* 로딩 */
  return <>{renderContent()}</>;
}
export default Main;
