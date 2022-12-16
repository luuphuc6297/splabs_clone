import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const AvatarWrapper = styled(Box)(({ theme }) => ({
    borderRadius: '24px',
    display: 'flex',
}));
const Avatar = styled('img')(({ theme }) => ({
    objectFit: 'cover',
    width: '100%',
    height: '100%',
}));

const Name = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    marginTop: '10px',
    marginBottom: '4px',
}));

const Position = styled(Typography)(({ theme }) => ({ textAlign: 'center' }));

export const MemberCard = React.memo(({ avatar, name, position }) => {
    return (
        <Box>
            <AvatarWrapper>
                <Avatar src={avatar} loading="lazy" />
            </AvatarWrapper>
            <Name>{name}</Name>
            <Position>{position}</Position>
        </Box>
    );
});
