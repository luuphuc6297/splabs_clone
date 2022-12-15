import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Avt3 } from 'assets';
import React from 'react';

const AvatarWrapper = styled(Box)(({ theme }) => ({}));
const Avatar = styled('img')(({ theme }) => ({}));

const Name = styled(Typography)(({ theme }) => ({}));

const Position = styled(Typography)(({ theme }) => ({}));

export const MemberCard = React.memo(({ avatar, name, position }) => {
    return (
        <Box sx={{ border: '1px solid' }}>
            <AvatarWrapper>
                <Avatar src={Avt3} loading="lazy" />
            </AvatarWrapper>
            <Name>{name}</Name>
            <Position>{position}</Position>
        </Box>
    );
});
