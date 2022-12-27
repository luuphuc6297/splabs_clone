import { Box } from '@mui/material';
import { MemberCardV2 } from 'components';
import { Swiper, SwiperSlide } from 'swiper/react';
import managementTeam from './managementTeam.json';
import './teamStyles.css';

export const ManagementTeam = () => {
    return (
        <Swiper
            loop={true}
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides
            initialSlide={1}
            onActiveIndexChange={(swiper) => {}}
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
                {managementTeam.payload.map(
                    ({ id, name, position, avatar, experiences }) => (
                        <SwiperSlide key={id}>
                            {({ isActive }) => {
                                return (
                                    <Box
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
                                            experiences={experiences}
                                        />
                                    </Box>
                                );
                            }}
                        </SwiperSlide>
                    )
                )}
            </>
        </Swiper>
    );
};
