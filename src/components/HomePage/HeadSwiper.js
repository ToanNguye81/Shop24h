
//ver 4
import React from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Navigation, Pagination,Autoplay  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


SwiperCore.use([Navigation, Pagination,Autoplay]);

export const HeadSwiper = ({ slides }) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      speed={200}
      className="head-swiper"
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} >
          <div className="head-swiper__image-container">
            <img src={slide.imageUrl} alt={slide.altText} className="head-swiper__image" />
          </div>
          <div className="head-swiper__caption">
            <h2 className="head-swiper__title">{slide.title}</h2>
            <p className="head-swiper__description">{slide.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

HeadSwiper.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      altText: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};


