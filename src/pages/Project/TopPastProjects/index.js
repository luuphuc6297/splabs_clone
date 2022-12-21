import { Box } from '@mui/material';
import { CustomSwiper, PastProject } from 'components';
import { useRef } from 'react';

import { SwiperSlide } from 'swiper/react';
import pastProjects from './topPastProjects.json';
import './styleSwiper.css';

const CLASS_CONTAINER = 'containerSwiper';
const CLASS_WRAPPER_PASS_PROJECT = 'wrapperPastProject';
const SPACING = 48;

const calSlidesPerView = (width) => {
    if (width > 1200) {
        const spaceBetweenSectionAndSlides = width - 1152;
        return (width = width / (width - spaceBetweenSectionAndSlides));
    }
    return (width = width / (width - SPACING));
};

export const TopPastProjects = () => {
    const swiperRef = useRef(null);

    return (
        <CustomSwiper
            containerModifierClass={CLASS_CONTAINER}
            style={{ textAlign: 'center' }}
            loop={true}
            spaceBetween={1}
            centeredSlides
            slidesPerView={1}
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
            }}
            onAfterInit={(swiper) => {
                const slidesPerView = calSlidesPerView(swiper.width);
                swiper.params.breakpoints = {
                    600: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    900: {
                        slidesPerView: slidesPerView,
                        spaceBetween: 30,
                    },
                };
                swiper.update();
            }}
            onResize={(swiper) => {
                const slidesPerView = calSlidesPerView(swiper.width);
                swiper.params.breakpoints = {
                    600: {
                        slidesPerView: slidesPerView,
                        spaceBetween: 30,
                    },
                };
                swiper.update();
            }}
        >
            {pastProjects.payload.map((pr) => (
                <SwiperSlide>
                    <Box className={CLASS_WRAPPER_PASS_PROJECT}>
                        <PastProject key={pr.id} {...pr} />
                    </Box>
                </SwiperSlide>
            ))}
        </CustomSwiper>
    );
};
