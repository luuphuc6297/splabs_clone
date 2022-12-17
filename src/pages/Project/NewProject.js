import { CustomSwiper, PastProject } from 'components';
import React, { useRef } from 'react';
import { Autoplay } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import pastProjects from './pastProjects.json';
import './styleSwiper.css';

const CLASS_CONTAINER = 'containerSwiper';
const CLASS_ACTIVE = 'slideActiveClass';
const CLASS_NEXT = 'slideNextClass';
const CLASS_PREV = 'slidePrevClass';

export const NewProject = () => {
    const swiperRef = useRef(null);

    return (
        <CustomSwiper
            containerModifierClass={CLASS_CONTAINER}
            slideActiveClass={CLASS_ACTIVE}
            slideNextClass={CLASS_NEXT}
            slidePrevClass={CLASS_PREV}
            style={{ textAlign: 'center' }}
            loop={true}
            modules={[Autoplay]}
            spaceBetween={1}
            centeredSlides
            slidesPerView={1.25}
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
            }}
            autoPlay
        >
            {pastProjects.payload.map((pr) => (
                <SwiperSlide>
                    <PastProject key={pr.id} {...pr} />
                </SwiperSlide>
            ))}
        </CustomSwiper>
    );
};
