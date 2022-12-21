import { Box } from '@mui/material';
import { MemberCard, SectionTitle, SectionWrapper } from 'components';
import { useRef } from 'react';
import { SwiperSlide } from 'swiper/react';
import members from './members.json';
import { CustomNavigationSwiper } from 'components/base/CustomNavigationSwiper';
import { Swiper } from 'swiper/react';

export const TheTeam = () => {
    const swiperRef = useRef(null);

    return (
        <SectionWrapper
            sx={{ paddingTop: 7.5, marginBottom: 15, position: 'relative' }}
        >
            <Box>
                <SectionTitle sx={{ textAlign: 'center', marginBottom: 5 }}>
                    THE TEAM
                </SectionTitle>
                <Swiper
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={2}
                    slidesPerGroup={3}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    breakpoints={{
                        600: {
                            slidesPerView: 3,
                            spaceBetween: 60,
                        },
                    }}
                >
                    {members.payload.map(({ id, name, position, avatar }) => (
                        <SwiperSlide key={id}>
                            <MemberCard
                                id={id}
                                name={name}
                                position={position}
                                avatar={avatar}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>

            <CustomNavigationSwiper swiperRef={swiperRef} />
        </SectionWrapper>
    );
};
