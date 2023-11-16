import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { fetchData } from '../server/server';
import DetailList from './DetailList';
import Loading from './Loading';
import { DetailSwiper } from './Swiper';
import { DetailFlowerLang, PointText, Source, SubText } from "../theme/globalStyle";
import '../scss/Detail.scss'
import { FcAbout, FcCloseUpMode, FcGlobe, FcLandscape, FcStackOfPhotos } from "react-icons/fc";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const { month, day } = useParams();
  const [flowerData, setFlowerData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData(month, day);
        if (data) {
          setFlowerData({
            ...data,
            flowerImg1: data.flowerImgSrc1,
            flowerImg2: data.flowerImgSrc2,
            flowerImg3: data.flowerImgSrc3,
          });
        }
      } catch (error) {
        console.error("Error fetching data :", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [month, day]);

  // 로딩
  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }

    return (
      <div className="detail">
        <SubText className="today">
          {flowerData.month}월 {flowerData.day}일
        </SubText>
        <PointText className="flowerName">
          <span className='koreaName'>{flowerData.flowerName}</span>
          <span className='englishName'>{flowerData.flowerEng}</span>
        </PointText>
        <div className="todayImgWrap">
          <DetailSwiper
            imgSrc1={flowerData.flowerImg1}
            imgSrc2={flowerData.flowerImg2}
            imgSrc3={flowerData.flowerImg3}
            flowerName={flowerData.flowerName}
          />
        </div>
        {/* 상세 정보 */}
        <DetailFlowerLang>
          <span>
            <FcCloseUpMode className='icon' />
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
        <Source>
          출처 : {flowerData.publishOrg}
        </Source>
      </div>
    );
  }
  return <>{renderContent()}</>;
}
export default Detail;
