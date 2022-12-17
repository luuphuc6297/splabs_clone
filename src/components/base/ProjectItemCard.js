import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const ImageWrapper = styled(Box)(() => ({
    borderRadius: '16px',
    display: 'flex',
    margin: '0 auto',
    overflow: 'hidden',
    border: '1px solid #ffffff',
}));
const Avatar = styled('img')(() => ({
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    maxHeight: 220,
}));

const Name = styled(Typography)(() => ({
    marginTop: '16px',
    marginBottom: '8px',
    fontFamily: 'PoppinsSemiBold',
}));

const Position = styled(Typography)(() => ({}));

export const ProjectItemCard = React.memo(({ image, name, title }) => {
    return (
        <Box
            sx={{
                '&:hover': {
                    transition: 'all 0.5s ease 0s',
                    transform: 'scale(1.01) !important',
                },
            }}
        >
            <ImageWrapper>
                <Avatar src={image} loading="lazy" />
            </ImageWrapper>

            <Box>
                <Name align="center" variant="h6">
                    {name}
                </Name>
                <Position align="center" color="#8B8B8B" variant="subtitle2">
                    {title}
                </Position>
            </Box>
        </Box>
    );
});
