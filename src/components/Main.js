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
  const [currentDate, setCurrentDate] = useState("");
  const [flowerName, setFlowerName] = useState("");
  const [flowerLang, setFlowerLang] = useState("");
  const [flowerImg1, setFlowerImg1] = useState("");
  const [flowerImg2, setFlowerImg2] = useState("");
  const [flowerImg3, setFlowerImg3] = useState("");
  // 로딩 중
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 서버에서 데이터 가져오기
    getCurrentDate();
  }, []);

  const getCurrentDate = async () => {
    /* 날짜 월일 가져오기 */
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // 1월이 0으로 시작하므로 +1을 해줌
    const day = String(now.getDate()).padStart(2, "0");

    const formattedDate = `${month}월 ${day}일`;
    setCurrentDate(formattedDate);

    try{
      const data = await fetchData(month, day);
      if (data) {
        setFlowerName(data.flowerName);
        setFlowerLang(data.flowerLang);
        setFlowerLang(data.flowerLang);
        setFlowerImg1(data.flowerImgSrc1);
        setFlowerImg2(data.flowerImgSrc2);
        setFlowerImg3(data.flowerImgSrc3);
      }
    }catch (error) {
      console.error("Error fetching data :", error);
    }finally {
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
          <SubText className="today">{currentDate}</SubText>
          <p className="title">오늘의 꽃은</p>
              <PointText className="flowerName">{flowerName}</PointText>
              <PointText className="flowerLang">: {flowerLang}</PointText>
        </div>
        <div className="todayImgWrap">
          <MainSwiper
          imgSrc1={flowerImg1}
          imgSrc2={flowerImg2}
          imgSrc3={flowerImg3}
          flowerName={flowerName}
          />
        </div>
        <Link to="/detail">
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
