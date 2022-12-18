import { CustomSwiper, SectionWrapper } from 'components';
import { ProjectItemCard } from 'components/base/ProjectItemCard';
import { useRef } from 'react';
import { SwiperSlide } from 'swiper/react';
import members from './ListProject.json';
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
                {members.payload.map(({ id, name, title, image }) => (
                    <SwiperSlide key={id}>
                        <ProjectItemCard
                            id={id}
                            name={name}
                            title={title}
                            image={image}
                        />
                    </SwiperSlide>
                ))}
            </CustomSwiper>

            <CustomNavigationSwiper swiperRef={swiperRef} />
        </SectionWrapper>
    );
};