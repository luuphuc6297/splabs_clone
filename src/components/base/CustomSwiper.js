// Import Swiper React components
// import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper';

export const CustomSwiper = ({ children, ...props }) => {
    return (
        <Swiper modules={[Navigation]} {...props}>
            {children}
        </Swiper>
    );
};
