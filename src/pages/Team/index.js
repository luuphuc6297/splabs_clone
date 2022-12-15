import { Box } from '@mui/system';
import {
    CustomSwiper,
    MemberCard,
    SectionTitle,
    SectionWrapper,
} from 'components';
import { IconChevronLeftSvg } from 'components/Svgs/IconChevronLeftSvg';
import { IconChevronRightSvg } from 'components/Svgs/IconChevronRightSvg';
import React, { useRef } from 'react';
import { SwiperSlide } from 'swiper/react';
import members from './members.json';

export const TheTeam = () => {
    const swiperRef = useRef(null);

    return (
        <SectionWrapper sx={{ marginBottom: 20, position: 'relative' }}>
            <Box>
                <SectionTitle sx={{ textAlign: 'center', marginBottom: 5 }}>
                    THE TEAM
                </SectionTitle>
                <CustomSwiper
                    loop={true}
                    spaceBetween={60}
                    slidesPerView={3}
                    slidesPerGroup={3}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {members.payload.map(({ id, name, position, avatar }) => (
                        <SwiperSlide>
                            <MemberCard
                                id={id}
                                name={name}
                                position={position}
                                avatar={avatar}
                            />
                        </SwiperSlide>
                    ))}
                </CustomSwiper>
            </Box>
            <Box slot="container-start">
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: '-50px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <IconChevronLeftSvg
                        onClick={() => swiperRef.current.slideNext()}
                    />
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: '-50px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <IconChevronRightSvg
                        onClick={() => swiperRef.current.slideNext()}
                    />
                </Box>
            </Box>
        </SectionWrapper>
    );
};
