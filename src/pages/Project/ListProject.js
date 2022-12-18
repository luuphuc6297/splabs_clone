import { CustomSwiper, SectionWrapper } from 'components';
import { ProjectItemCard } from 'components/base/ProjectItemCard';
import { useRef } from 'react';
import { SwiperSlide } from 'swiper/react';
import projects from './ListProject.json';
import { CustomNavigationSwiper } from 'components/base/CustomNavigationSwiper';

export const ListProject = () => {
    const swiperRef = useRef(null);

    return (
        <SectionWrapper sx={{ marginTop: 5, position: 'relative' }}>
            <CustomSwiper
                loop={true}
                spaceBetween={30}
                slidesPerView={2}
                slidesPerGroup={4}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                breakpoints={{
                    600: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
            >
                {projects.payload.map(
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
