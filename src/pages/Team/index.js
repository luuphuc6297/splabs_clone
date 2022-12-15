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
  const renderMemberCards = React.useCallback(() => {
    return (
      <CustomSwiper>
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
    <SectionWrapper sx={{ margin: 'auto', marginBottom: 21 }}>
      <SectionTitle sx={{ textAlign: 'center' }}>THE TEAM</SectionTitle>
      {renderMemberCards()}
    </SectionWrapper>
  );
};
