import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import moringa from "../../assets/img/square-trade-moringa.jpg";
import Tin from "../../assets/img/Square-trade-tin.jpg";
import TigerNuts from "../../assets/img/square-trade-tiger-nuts.jpeg";
import StoneFlower from "../../assets/img/square-trade-stone-flower.jpg";
import Habiscus from "../../assets/img/square-trade-dried-habiscus.jpg";

const Swipers = () => {
  const slider_images = [moringa, Tin, TigerNuts, StoneFlower, Habiscus];
  return (
    <div className="container">
      <h1 className="heading">Our Crops</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          {slider_images &&
            slider_images.map((image, index) => (
              <>
                <img src={image} alt={image} key={index} />
              </>
            ))}
        </SwiperSlide>
        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
            <h1 className="text-black text-2xl">left</h1>
          </div>
          <div className="swiper-button-next slider-arrow">
            {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
            <h1 className="text-black text-2xl">right</h1>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Swipers;
