
//ver 4
import React from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Navigation, Pagination,Autoplay  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


SwiperCore.use([Navigation, Pagination,Autoplay]);

const sneakerSlides = [
  {
    imageUrl: 'https://source.unsplash.com/random/1200x650/?sneaker',
    altText: 'Slide 1',
    title: 'Nike Air Force 1',
    description: 'The iconic sneaker that started it all'
  },
  {
    imageUrl: 'https://source.unsplash.com/random/1200x650/?Ultraboost',
    altText: 'Slide 2',
    title: 'Adidas Ultraboost',
    description: 'The ultimate running shoe'
  },
  {
    imageUrl: 'https://source.unsplash.com/random/1200x650/?shoes',
    altText: 'Slide 3',
    title: 'New Balance 990',
    description: 'The classic American-made sneaker'
  },
  {
    imageUrl: 'https://source.unsplash.com/random/1200x650/?sandal',
    altText: 'Slide 4',
    title: 'New Sandal',
    description: 'The classic Sandal sneaker'
  },
  {
    imageUrl: 'https://source.unsplash.com/random/1200x650/?sneakers',
    altText: 'Slide 5',
    title: 'New clogs',
    description: 'The classic Clogs The classic American-made sneaker'
  },
];

export const HeadSwiper = ({ slides }) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      speed={200}
      pagination={{ clickable: true }}
      className="head-swiper"
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
    >
      {sneakerSlides.map((slide, index) => (
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


