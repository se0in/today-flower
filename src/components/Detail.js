import React from "react";
import { DetailFlowerLang, FlowerEtcList, PointText, Source, SubText } from "../theme/globalStyle";
import { FcAbout, FcCloseUpMode, FcGlobe, FcLandscape, FcStackOfPhotos } from "react-icons/fc";
import '../scss/Detail.scss'
import { DetailSwiper } from './Swiper';


const Search = () => {
  return (
    <div className="detail">
      {/* 날짜 */}
      <SubText className="today">11월 9일</SubText>
      {/* 꽃 이름 : 한영 */}
      <PointText className="flowerName">
        <span className='koreaName'>민들레</span>
        <span className='englishName'>EnglishName</span>
      </PointText>
      {/* 스와이퍼 */}
      <div className="todayImgWrap">
        <DetailSwiper />
      </div>
      {/* 상세 정보 */}
      {/* 꽃말 */}
      <DetailFlowerLang>
        <span>
          <FcCloseUpMode className='icon'/>
          꽃말
        </span>
        <p>행복과 감사하는 마음</p>
      </DetailFlowerLang>
      <ul className="FlowerEtc">
        {/* 내용 */}
        <FlowerEtcList>
          <FcAbout className='icon'/>
          <div>
            <span className='title'>내용</span>
            <p>내용 들어갈 곳내용 들어갈 곳내용 들어갈 곳내용 들어갈 곳내용 들어갈 곳</p>
          </div>
        </FlowerEtcList>
        {/* 이용 */}
        <FlowerEtcList>
          <FcStackOfPhotos className='icon'/>
          <div>
            <span className='title'>이용</span>
            <p>내용 들어갈 곳내용 들어갈 곳내용 들어갈 곳내용 들어갈 곳내용 들어갈 곳</p>
          </div>
        </FlowerEtcList>
        {/* 기르기 */}
        <FlowerEtcList>
          <FcLandscape className='icon'/>
          <div>
            <span className='title'>기르기</span>
            <p>내용 들어갈 곳내용 들어갈 곳내용 들어갈 곳내용 들어갈 곳내용 들어갈 곳</p>
          </div>
        </FlowerEtcList>
        {/* 자생지 */}
        <FlowerEtcList>
          <FcGlobe className='icon'/>
          <div>
            <span className='title'>자생지</span>
            <p>내용 들어갈 곳내용 들어갈 곳내용 들어갈 곳내용 들어갈 곳내용 들어갈 곳</p>
          </div>
        </FlowerEtcList>
      </ul>
      {/* 출처 */}
      <Source>
        출처 : 농촌진흥청 국립원예특작과학원
      </Source>
    </div>
  );
};
export default Search;
