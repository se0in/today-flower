import React, { useEffect, useState } from "react";
import { DetailFlowerLang, PointText, Source, SubText } from "../theme/globalStyle";
import { FcAbout, FcCloseUpMode, FcGlobe, FcLandscape, FcStackOfPhotos } from "react-icons/fc";
import '../scss/Detail.scss'
import { DetailSwiper } from './Swiper';
import DetailList from './DetailList';
import { useParams } from 'react-router-dom';
import { fetchData } from '../server/server';

const Detail = ({ data }) => {
  // const location = useLocation();
  const { month, day } = useParams();
  const [flowerData, setFlowerData] = useState({
    flowerName: "",
    flowerLang: "",
    flowerImg1: "",
    flowerImg2: "",
    flowerImg3: "",
    flowerMonth: "",
    flowerDay: "",
  });
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData(month, day);
        console.log('fetchData: ', fetchData);
        console.log('data: ', data);
        if (data) {
          setFlowerData({
            ...data,
            id: data.id,
            month: data.month,
            day: data.day,
            flowerName: data.flowerName,
            flowerEng: data.flowerEng,
            flowerLang: data.flowerLang,
            flowerContent: data.flowerContent,
            flowerUse: data.flowerUse,
            flowerGrow: data.flowerGrow,
            flowerType: data.flowerType,
            flowerImg1: data.flowerImgSrc1,
            flowerImg2: data.flowerImgSrc2,
            flowerImg3: data.flowerImgSrc3,
          });
        }
      } catch (error) {
        console.error("Error fetching data :", error);
      } finally {
        // setLoading(false);
      }
    };

    getData();
  }, [month, day]);

  return (
    <div className="detail">
      {/* 날짜 */}
      {/* id */}
      <SubText className="today">
      {flowerData.month}월 {flowerData.day}일
      </SubText>
      {/* 꽃 이름 : 한영 */}
      <PointText className="flowerName">
        <span className='koreaName'>{flowerData.flowerName}</span>
        <span className='englishName'>{flowerData.flowerEng}</span>
      </PointText>
      {/* 스와이퍼 */}
      <div className="todayImgWrap">
        <DetailSwiper
          imgSrc1={flowerData.flowerImg1}
          imgSrc2={flowerData.flowerImg2}
          imgSrc3={flowerData.flowerImg3}
          flowerName={flowerData.flowerName}
          />
      </div>
      {/* 상세 정보 */}
      {/* 꽃말 */}
      <DetailFlowerLang>
        <span>
          <FcCloseUpMode className='icon'/>
          꽃말
        </span>
        <p>{flowerData.flowerLang}</p>
      </DetailFlowerLang>
      <ul className="FlowerEtc">
        <DetailList title="내용" text={flowerData.flowerContent}>
          <FcAbout className='icon' />
        </DetailList>
        <DetailList title="이용" text={flowerData.flowerUse}>
          <FcStackOfPhotos className='icon' />
        </DetailList>
        <DetailList title="기르기" text={flowerData.flowerGrow}>
          <FcLandscape className='icon' />
        </DetailList>
        <DetailList title="자생지" text={flowerData.flowerType}>
          <FcGlobe className='icon' />
        </DetailList>
      </ul>
      {/* 출처 */}
      <Source>
        출처 : {flowerData.flowerEng}
      </Source>
    </div>
  );
};
export default Detail;
