import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./slider.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import { NavLink } from "react-router-dom";
import { Pagination, Navigation } from "swiper";

export default function Sliders({ data }) {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.mySwiper}
      >
        {data.map((e, i) => (
          <SwiperSlide className={styles.man} key={i}>
            <NavLink to="#">
              <img src={e.IMG} alt="" />
            </NavLink>
            <div>
              <p>₹{e.price}</p>
              <p className={styles.discount}>₹{e.mrp}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
