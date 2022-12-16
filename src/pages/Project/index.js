import { CustomSwiper, MemberCard, SectionWrapperFullWidth } from 'components';
import MediaControlCard from 'components/base/Project';
import React, { useRef } from 'react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import members from './members.json';
import './styleSwiper.css';

const CLASS_CONTAINER = 'containerSwiper';
const CLASS_ACTIVE = 'slideActiveClass';
const CLASS_NEXT = 'slideNextClass';
const CLASS_PREV = 'slidePrevClass';

export const Project = () => {
    const swiperRef = useRef(null);
    const renderMemberCards = React.useCallback(() => {
        return (
            <CustomSwiper
                slideToClickedSlide
                containerModifierClass={CLASS_CONTAINER}
                slideActiveClass={CLASS_ACTIVE}
                slideNextClass={CLASS_NEXT}
                slidePrevClass={CLASS_PREV}
                style={{ textAlign: 'center' }}
                loop={true}
                spaceBetween={50}
                speed={1000}
                autoplay={{ delay: 2000 }}
                centeredSlides
                slidesPerView={1}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                breakpoints={{
                    600: {
                        slidesPerView: 1.8,
                        spaceBetween: 5,
                    },
                }}
            >
                {members.payload.map(({ id, name, position, avatar }) => (
                    <SwiperSlide>
                        <MediaControlCard />
                    </SwiperSlide>
                ))}
            </CustomSwiper>
        );
    }, []);

    return (
        <SectionWrapperFullWidth>{renderMemberCards()}</SectionWrapperFullWidth>
    );
};
