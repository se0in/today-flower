import React, { useEffect, useState } from "react";
import "../scss/Main.scss";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { PointText, SubText } from "../theme/globalStyle";
import ThemeBtn from "./ThemeBtn";
import { MainSwiper } from "./Swiper";
import { fetchData } from '../server/server';
import Loading from './Loading';

function Main({ toggleTheme, themeMode }) {
  /* 데이터 가져옴 */
  const [flowerData, setFlowerData] = useState({
    currentDate: "",
    flowerName: "",
    flowerLang: "",
    flowerImg1: "",
    flowerImg2: "",
    flowerImg3: "",
  })
  // 로딩 중
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 서버에서 데이터 가져오기
    getCurrentDate();
  }, []);
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // 1월이 0으로 시작하므로 +1을 해줌
  const day = String(now.getDate()).padStart(2, "0");

  const getCurrentDate = async () => {
    /* 날짜 월일 가져오기 */

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
      //로딩 완료 시 상태 false
      setLoading(false);
    }
  };

  return (
    <div className="main">
      {
        loading ? (
          <Loading />
        ) : (
          <>
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
          </>
        )}
    </div>
  );
}

export default Main;
