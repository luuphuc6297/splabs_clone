// Import Swiper React components
// import { Navigation } from 'swiper';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper } from 'swiper/react';

export const CustomSwiper = ({ children, ...props }) => {
    return (
        <Swiper
            // autoplay={{
            //     delay: 2500,
            //     disableOnInteraction: false,
            // }}
            // modules={[Autoplay]}
            {...props}
        >
            {children}
        </Swiper>
    );
};
