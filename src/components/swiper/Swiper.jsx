import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const Swipers = ({ title, slider_image }) => {
    const [currentImageTitle, setCurrentImageTitle] = React.useState(
        slider_image[0]?.title || ""
      );
    
      const handleSlideChange = (swiper) => {
        console.log(swiper, 'swiper');
        const activeSlideIndex = swiper.activeIndex;
        const activeSlide = slider_image[activeSlideIndex];
        console.log(activeSlide, activeSlideIndex)
        setCurrentImageTitle(activeSlide?.title || "");
      };
  return (
    <div className="container">
      <h1 className="heading text-white">{title}</h1>
      <Swiper
        className="swiper_container"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        scrollbar={{ draggable: true }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        onSlideChange={handleSlideChange}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {slider_image &&
          slider_image.map((item, index) => (
            <SwiperSlide className="general-swiper-slide" id="general-swiper-slide" key={index}>
              <img src={item.image} alt={item.title} />
            </SwiperSlide>
          ))}
        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
          {/* <div className="text-white current-image-title">{currentImageTitle}</div> */}
        </div>
      </Swiper>
    </div>
  );
};

export default Swipers;
