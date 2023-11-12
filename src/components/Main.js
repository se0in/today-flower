import React from "react";
import "../scss/Main.scss";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { PointText, SubText } from "../theme/globalStyle";
import ThemeBtn from "./ThemeBtn";
import { MainSwiper } from './Swiper';

function Main({ toggleTheme, themeMode }) {
  return (
    <div className="main">
      <div className="todayTextWrap">
        <SubText className="today">11월 9일</SubText>
        <p className="title">오늘의 꽃은</p>
        <PointText className="flowerName">민들레</PointText>
        <PointText className="flowerLang">: 행복과 감사하는 마음</PointText>
      </div>
      <div className="todayImgWrap">
        <MainSwiper ></MainSwiper>
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
    </div>
  );
}

export default Main;
