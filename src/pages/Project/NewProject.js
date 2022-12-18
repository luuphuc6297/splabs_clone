import { Box } from '@mui/system';
import { CustomSwiper, PastProject } from 'components';
import React, { useRef } from 'react';
import { Autoplay } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import pastProjects from './pastProjects.json';
import './styleSwiper.css';

const CLASS_CONTAINER = 'containerSwiper';
const CLASS_WRAPPER_PASS_PROJECT = 'wrapperPastProject';

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
            autoPlay
            breakpoints={{
                600: {
                    slidesPerView: 1.25,
                    spaceBetween: 30,
                },
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
