import { Box, Divider, styled, Typography } from '@mui/material';
import { GradientBox } from 'components';
import React from 'react';

const LogoBox = styled(Box)(({ theme }) => ({
    marginRight: 16,
}));

const Logo = styled('img')(({ theme }) => ({
    width: 64,
    height: 64,
    color: 'white',
}));

const TitleBox = styled(Box)(({ theme }) => ({}));

const Title = styled(Typography)(({ theme }) => ({}));

const Caption = styled(Typography)(({ theme }) => ({}));

export const OfferCard = React.memo(({ logo, title, caption }) => {
    return (
        <GradientBox
            data-aos="zoom-in"
            data-aos-duration="5000"
            data-aos-easing="linear"
            sx={{
                display: 'flex',
                alignItems: 'center',
                padding: 2,
                height: 128,
                '&:hover': {
                    transform: 'scale(1.02) !important',
                },
            }}
        >
            <LogoBox>
                <Logo src={logo} loading="lazy" />
            </LogoBox>
            <Divider
                orientation="vertical"
                flexItem
                sx={{ backgroundColor: 'white', marginRight: 2, opacity: 0.5 }}
            />

            <TitleBox>
                <Title variant="h6">{title}</Title>
                <Caption>{caption}</Caption>
            </TitleBox>
        </GradientBox>
    );
});
