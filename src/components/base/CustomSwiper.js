// Import Swiper React components
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper } from 'swiper/react';

export const CustomSwiper = ({ children }) => {
  return (
    <Swiper
      style={{ textAlign: 'center' }}
      modules={[Navigation]}
      navigation={true}
      loop={true}
      spaceBetween={50}
      slidesPerView={3}
      slidesPerGroup={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {children}
    </Swiper>
  );
};
