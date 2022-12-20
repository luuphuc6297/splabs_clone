import { CustomSwiper, SectionWrapper } from 'components';
import { CustomNavigationSwiper } from 'components/base/CustomNavigationSwiper';
import { ProjectItemCard } from 'components/base/ProjectItemCard';
import { useRef } from 'react';
import { SwiperSlide } from 'swiper/react';
import botPastProjects from './botPastProjects';

export const BotPastProjects = () => {
    const swiperRef = useRef(null);

    return (
        <SectionWrapper sx={{ marginTop: 5, position: 'relative' }}>
            <CustomSwiper
                loop={true}
                spaceBetween={24}
                slidesPerView={2}
                slidesPerGroup={4}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                breakpoints={{
                    600: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },

                    900: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                }}
            >
                {botPastProjects.payload.map(
                    ({ id, logo, title, description, link }) => (
                        <SwiperSlide key={id}>
                            <ProjectItemCard
                                id={id}
                                logo={logo}
                                title={title}
                                description={description}
                                link={link}
                            />
                        </SwiperSlide>
                    )
                )}
            </CustomSwiper>

            <CustomNavigationSwiper swiperRef={swiperRef} />
        </SectionWrapper>
    );
};
