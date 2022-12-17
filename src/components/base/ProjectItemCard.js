import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const ImageWrapper = styled(Box)(() => ({
    // width: 160, // why u fixed width in here? if fixed wide, i think have a lot issue when responsive.
    height: 160,
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
}));

const Name = styled(Typography)(() => ({
    marginTop: 8,
    marginBottom: 8,
    fontSize: 14,
    fontWeight: 'bold',
}));

const Caption = styled(Typography)(() => ({
    fontSize: 12,
}));

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
                <Name align="center">{name}</Name>
                <Caption align="center" color="#8B8B8B" variant="subtitle2">
                    {title}
                </Caption>
            </Box>
        </Box>
    );
});
