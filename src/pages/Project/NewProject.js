import { Box } from '@mui/system';
import { CustomSwiper, PastProject } from 'components';
import React, { useRef, useState } from 'react';
import { Autoplay } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import pastProjects from './pastProjects.json';
import './styleSwiper.css';

const CLASS_CONTAINER = 'containerSwiper';
const CLASS_WRAPPER_PASS_PROJECT = 'wrapperPastProject';
const SPACING = 48;

export const NewProject = () => {
    const swiperRef = useRef(null);

    return (
        <CustomSwiper
            containerModifierClass={CLASS_CONTAINER}
            style={{ textAlign: 'center' }}
            loop={true}
            modules={[Autoplay]}
            spaceBetween={1}
            centeredSlides
            slidesPerView={1}
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
            }}
            onAfterInit={(swiper) => {
                const slidesPerView = swiper.width / (swiper.width - SPACING);

                swiper.params.breakpoints = {
                    600: {
                        slidesPerView,
                        spaceBetween: 30,
                    },
                };
                swiper.update();
            }}
            onResize={(swiper) => {
                const slidesPerView = swiper.width / (swiper.width - SPACING);

                swiper.params.breakpoints = {
                    600: {
                        slidesPerView,
                        spaceBetween: 30,
                    },
                };
                swiper.update();
            }}
            autoPlay
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
