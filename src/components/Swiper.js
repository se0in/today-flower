import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/pagination';
import 'swiper/css/effect-cards';
import '../scss/Swiper.scss'
import { EffectCards, Pagination, Autoplay } from 'swiper/modules';

export const MainSwiper = ({ imgSrc1, imgSrc2, imgSrc3, flowerName }) => {
  const imagesData = [imgSrc1, imgSrc2, imgSrc3]

  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Pagination, Autoplay]}
        className="mainSwiper"
        navigation={true}
        cardsEffect={{
          rotate: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true,
        }}
      >
        {
          imagesData.map((img, idx) => {
            return (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={flowerName}
                >
                </img>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}

export const DetailSwiper = ({ imgSrc1, imgSrc2, imgSrc3, flowerName }) => {
  const imagesData = [imgSrc1, imgSrc2, imgSrc3]

  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="detailSwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        loop={true}
      >
        {
          imagesData.map((img, idx) => {
            return (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={flowerName}
                >
                </img>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}