import React from "react";
import { DetailFlowerLang, PointText, Source, SubText } from "../theme/globalStyle";
import { FcAbout, FcCloseUpMode, FcGlobe, FcLandscape, FcStackOfPhotos } from "react-icons/fc";
import '../scss/Detail.scss'
import { DetailSwiper } from './Swiper';
import DetailList from './DetailList';


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
        <DetailList title="내용" text="긴 글 내용 쏼라쏼라">
          <FcAbout className='icon' />
        </DetailList>
        <DetailList title="이용" text="이용방법 쏼라쏼라">
          <FcStackOfPhotos className='icon' />
        </DetailList>
        <DetailList title="기르기" text="기르는 법 쏼라쏼라">
          <FcLandscape className='icon' />
        </DetailList>
        <DetailList title="자생지" text="자생지 쏼라쏼라">
          <FcGlobe className='icon' />
        </DetailList>
      </ul>
      {/* 출처 */}
      <Source>
        출처 : 농촌진흥청 국립원예특작과학원
      </Source>
    </div>
  );
};
export default Search;
