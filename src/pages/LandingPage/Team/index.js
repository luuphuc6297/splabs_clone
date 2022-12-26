import { Box } from '@mui/material';
import {
    MemberCardV2,
    SectionTitle,
    SectionWrapperFullWidth,
} from 'components';
import { SwiperSlide } from 'swiper/react';
import members from './members.json';
import { Swiper } from 'swiper/react';
import './index.css';

export const TheTeam = () => {
    return (
        <SectionWrapperFullWidth sx={{ paddingBottom: 15 }}>
            <Box>
                <SectionTitle sx={{ textAlign: 'center', marginBottom: 5 }}>
                    THE TEAM
                </SectionTitle>
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={1}
                    centeredSlides
                    initialSlide={1}
                    slideActiveClass="the-team_slideActiveClass"
                    onActiveIndexChange={(swiper) => {
                        console.log(swiper);
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
                    {members.payload.map(({ id, name, position, avatar }) => (
                        <SwiperSlide key={id}>
                            <MemberCardV2
                                id={id}
                                name={name}
                                position={position}
                                avatar={avatar}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </SectionWrapperFullWidth>
    );
};
