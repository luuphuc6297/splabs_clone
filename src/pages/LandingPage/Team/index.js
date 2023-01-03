import { Box } from '@mui/material';
import {
    MemberCardV2,
    SectionTitle,
    SectionWrapperFullWidth,
} from 'components';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import members from './members.json';
import './teamStyles.css';
import { useTheme } from '@mui/material/styles';
export const TheTeam = () => {
    const theme = useTheme();
    return (
        <SectionWrapperFullWidth id="the-team" sx={{ paddingBottom: 20 }}>
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
                    onActiveIndexChange={(swiper) => {}}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
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
                        {members.payload.map(
                            ({ id, name, position, avatar, linkedin }) => (
                                <SwiperSlide key={id}>
                                    {({ isActive }) => {
                                        return (
                                            <Box
                                                sx={{
                                                    [theme.breakpoints.up(
                                                        '1780'
                                                    )]: {
                                                        maxWidth: 1080,
                                                    },
                                                    maxWidth: 878,
                                                }}
                                                className={
                                                    isActive
                                                        ? 'the-team_slideActiveClass'
                                                        : null
                                                }
                                            >
                                                <MemberCardV2
                                                    id={id}
                                                    name={name}
                                                    position={position}
                                                    avatar={avatar}
                                                    linkedin={linkedin}
                                                />
                                            </Box>
                                        );
                                    }}
                                </SwiperSlide>
                            )
                        )}
                    </>
                </Swiper>
            </Box>
        </SectionWrapperFullWidth>
    );
};
