// Import Swiper React components
// import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper } from 'swiper/react';

export const CustomSwiper = ({ children, ...props }) => {
    return <Swiper {...props}>{children}</Swiper>;
};
