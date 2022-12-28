import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material';
import React from 'react';

const Step = styled(Typography)(({ theme }) => ({
    marginBottom: 16,
    fontFamily: 'PoppinsBold',
}));

const Title = styled(Typography)(({ theme }) => ({
    marginBottom: 16,
    fontFamily: 'PoppinsBold',
}));

const TopCaption = styled(Typography)(({ theme }) => ({}));

export const PresentationCard = React.memo(
    ({ step, title, top_caption, bot_caption }) => {
        return (
            <Box
                data-aos="fade-down"
                data-aos-duration="5000"
                data-aos-easing="linear"
                sx={{
                    height: '100%',
                    padding: '40px',
                    borderRadius: 4,
                    backgroundImage: `url('/images/background/presentation-background.png')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    objectFit: 'contain',
                    backgroundPosition: 'center',
                    transition: 'all 0.5s ease 0s',
                    '&:hover': {
                        transform: 'scale(1.025) !important',
                    },
                }}
            >
                <Step variant="h3">{step}</Step>
                <Title variant="h3">{title}</Title>
                <div style={{ marginBottom: 16 }}>
                    <TopCaption variant="caption">{top_caption}</TopCaption>
                </div>
                <Typography variant="caption">{bot_caption}</Typography>
            </Box>
        );
    }
);
