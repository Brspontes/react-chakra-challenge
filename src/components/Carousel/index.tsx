import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper/core';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import styles from './styles.module.scss';




export default function Carousel () {
  SwiperCore.use([Pagination]);
  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide className={styles.swiperslide}>
        <p>TESTE</p>
        <img src="https://bigseventravel.com/wp-content/uploads/2019/12/marco-ten-donkelaar-tTolSho3tBY-unsplash-1024x768.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperslide}>Slide 2</SwiperSlide>
      <SwiperSlide className={styles.swiperslide}>Slide 3</SwiperSlide>
      <SwiperSlide className={styles.swiperslide}>Slide 4</SwiperSlide>
    </Swiper>
  )
}
