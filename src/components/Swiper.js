import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Pagination from "swiper";
import 'swiper/css';
import 'swiper/scss/pagination';
import 'swiper/css/effect-cards';
import '../scss/Swiper.scss'
import { EffectCards, Pagination, Autoplay } from 'swiper/modules';

export const MainSwiper = () => {
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
          delay: 30000, 
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
}

export const DetailSwiper = () => {
  return(
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
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
}