
// import React from 'react';
// import SwiperCore, { Navigation, Pagination } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';

// SwiperCore.use([Navigation, Pagination]);

// export const HeadSwiper = ({ slides }) => {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//     >
//       {slides.map((slide, index) => (
//         <SwiperSlide key={index}>
//           <img src={slide.imageUrl} alt={slide.altText} />
//           <div className="swiper-slide-caption">
//             <h3>{slide.title}</h3>
//             <p>{slide.description}</p>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };


// //Ver 2
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';

// export const HeadSwiper = ({slides}) => {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       centeredSlides={true}
//       loop={true}
//       navigation
//       pagination={{ clickable: true }}
//       className="mySwiper"
//     >
//       {slides.map((slide, index) => (
//         <SwiperSlide key={index}>
//           <img src={slide.imageUrl} alt={slide.altText} style={{ display: 'block', margin: '0 auto' }} />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }

// Ver3
import React from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './HeadSwiper.css';

SwiperCore.use([Navigation, Pagination]);

export const HeadSwiper=({ slides })=> {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="head-swiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="head-swiper__image-container">
            <img src={slide.imageUrl} alt={slide.altText} className="head-swiper__image" />
          </div>
          <div className="head-swiper__caption">
            <h3 className="head-swiper__title">{slide.title}</h3>
            <p className="head-swiper__description">{slide.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

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