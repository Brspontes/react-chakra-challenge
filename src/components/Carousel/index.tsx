import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import styles from './styles.module.scss';
import { content } from "./Content";
import { Text } from "@chakra-ui/react";

export default function Carousel () {
  SwiperCore.use([Autoplay])
  SwiperCore.use([Pagination]);
  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 5000 }}
    >
      {content.map(c => (
        <SwiperSlide className={styles.swiperslide}>
          <Text borderRadius="10" backgroundColor="gray.800" color="white" opacity="70%" fontSize="5xl" position="absolute" >{c.continente}</Text>
          <Text color="white" opacity="70%" fontSize="5xl" position="absolute" >{c.continente}</Text>
          <img src={c.urlImg} alt="continente" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
