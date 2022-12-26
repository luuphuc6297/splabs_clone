import { Box } from '@mui/material';
import { styled } from '@mui/material';
import { AboutUsBanner } from 'assets';
import React from 'react';

const BannerImg = styled('img')(({ theme }) => ({
    width: '90%',
    height: '90%',
    objectFit: 'contain',
}));

export const Banner = React.memo(() => {
    return (
        <Box sx={{ width: '100%', marginRight: 2 }}>
            <BannerImg src={AboutUsBanner} />
        </Box>
    );
});
