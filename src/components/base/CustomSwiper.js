// Import Swiper React components
// import { Navigation } from 'swiper';
import { useRef } from 'react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper } from 'swiper/react';

export const CustomSwiper = ({ children, ...props }) => {
  const swiperRef = useRef(null);

  return (
    <>
      <Swiper
        style={{ textAlign: 'center' }}
        loop={true}
        spaceBetween={50}
        slidesPerView={3}
        slidesPerGroup={3}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        {...props}
      >
        {children}
      </Swiper>

      <button onClick={() => swiperRef.current.slideNext()}>pre</button>
    </>
  );
};
