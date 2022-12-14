import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const AvatarWrapper = styled(Box)(({ theme }) => ({}));
const Avatar = styled('img')(({ theme }) => ({}));

const Name = styled(Typography)(({ theme }) => ({}));

const Position = styled(Typography)(({ theme }) => ({}));

export const MemberCard = React.memo(({ avatar, name, position }) => {
  return (
    <Box sx={{ width: 168, border: '1px solid' }}>
      <AvatarWrapper>
        <Avatar src={avatar} />
      </AvatarWrapper>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Box>
  );
});
