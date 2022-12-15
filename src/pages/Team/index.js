import { Box } from '@mui/system';
import {
    CustomSwiper,
    MemberCard,
    SectionTitle,
    SectionWrapper,
} from 'components';
import React, { useRef } from 'react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import members from './members.json';

export const TheTeam = () => {
    const swiperRef = useRef(null);

    const renderMemberCards = React.useCallback(() => {
        return (
            <CustomSwiper
                style={{ textAlign: 'center' }}
                loop={true}
                spaceBetween={50}
                slidesPerView={3}
                slidesPerGroup={3}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
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
        );
    }, []);

    return (
        <SectionWrapper
            sx={{ margin: 'auto', marginBottom: 21, position: 'relative' }}
        >
            <SectionTitle sx={{ textAlign: 'center' }}>THE TEAM</SectionTitle>
            {renderMemberCards()}
            <Box
                sx={{
                    position: 'absolute',
                    width: '104%',
                    top: '50%',
                    left: '-2%',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <button onClick={() => swiperRef.current.slideNext()}>
                    pre
                </button>
                <button onClick={() => swiperRef.current.slideNext()}>
                    next
                </button>
            </Box>
        </SectionWrapper>
    );
};
