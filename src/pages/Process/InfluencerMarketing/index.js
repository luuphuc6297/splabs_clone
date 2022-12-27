import { Divider } from '@mui/material';
import {
    CustomNavigationSwiper,
    InfluencerCard,
    SectionTitle,
    SectionWrapper,
} from 'components';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import marketings from './marketings.json';
export const InfluencerMarketing = () => {
    const swiperRef = React.useRef(null);

    return (
        <SectionWrapper id="influencer_marketing" sx={{ marginBottom: 21 }}>
            <SectionTitle sx={{ textAlign: 'center' }}>
                INFLUENCER MARKETING
            </SectionTitle>
            <Divider
                sx={{
                    width: '5%',
                    backgroundColor: 'white',
                    margin: '0 auto 56px auto',
                }}
            />
            <Swiper
                loop={true}
                spaceBetween={4}
                slidesPerView={4}
                centeredSlides
                // initialSlide={4}
                // slidesPerGroup={4}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                breakpoints={{
                    600: {
                        slidesPerView: 1.1,
                        spaceBetween: 15,
                    },
                    900: {
                        slidesPerView: 1.3,
                        spaceBetween: 20,
                    },
                    1000: {
                        slidesPerView: 1.8,
                        spaceBetween: 40,
                    },
                }}
            >
                <>
                    {marketings.payload.map(
                        ({ id, name, position, avatar, facebook, youtube }) => (
                            <SwiperSlide key={id}>
                                <InfluencerCard
                                    id={id}
                                    name={name}
                                    position={position}
                                    avatar={avatar}
                                    facebook={facebook}
                                    youtube={youtube}
                                />
                            </SwiperSlide>
                        )
                    )}
                </>
            </Swiper>
            <CustomNavigationSwiper swiperRef={swiperRef} />
        </SectionWrapper>
    );
};
