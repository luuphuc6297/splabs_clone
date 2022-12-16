import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const ImageWrapper = styled(Box)(({ theme }) => ({
    borderRadius: '8px',
    display: 'flex',
    margin: '0 auto',
    overflow: 'hidden',
}));
const Avatar = styled('img')(({ theme }) => ({
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    maxHeight: 120,
}));

const Name = styled(Typography)(({ theme }) => ({
    marginTop: '10px',
    marginBottom: '4px',
    fontWeight: 600,
}));

const Position = styled(Typography)(({ theme }) => ({}));

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

            <Box
                sx={{
                    padding: '0 10px',
                }}
            >
                <Name align="left" variant="h6">
                    {name}
                </Name>
                <Position align="left" color="#8B8B8B" variant="subtitle2">
                    {title}
                </Position>
            </Box>
        </Box>
    );
});
