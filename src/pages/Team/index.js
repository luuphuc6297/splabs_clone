import {
  CustomSwiper,
  MemberCard,
  SectionTitle,
  SectionWrapper,
} from 'components';
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import members from './members.json';

export const TheTeam = () => {
  return (
    <SectionWrapper sx={{ margin: 'auto' }}>
      <SectionTitle sx={{ textAlign: 'center' }}>THE TEAM</SectionTitle>
      <CustomSwiper>
        {members.payload.map(({ id, name, position, avatar }, index) => (
          <SwiperSlide key={index}>
            <MemberCard
              id={id}
              name={name}
              position={position}
              avatar={avatar}
            />
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </SectionWrapper>
  );
};
