import { Box, Divider, styled, Typography } from '@mui/material';
import { GradientBox } from 'components';
import React from 'react';

const StepBox = styled(Box)(({ theme }) => ({
    marginRight: 24,
    
}));

const Step = styled(Typography)(({ theme }) => ({
    fontSize: 40,
    fontFamily: 'PoppinsBold',
    fontWeight: 'bold',
}));

const Caption = styled(Typography)(({ theme }) => ({
    fontSize: 14,
}));

export const InfluencerProcessCard = React.memo(({ step, caption }) => {
    return (
        <GradientBox
            data-aos="zoom-in"
            data-aos-duration="5000"
            data-aos-easing="linear"
            sx={{
                display: 'flex',
                alignItems: 'center',
                padding: 2,
                height: 120,
                '&:hover': {
                    transform: 'scale(1.02) !important',
                },
            }}
        >
            <StepBox>
                <Step>{step}</Step>
            </StepBox>
            <Divider
                orientation="vertical"
                flexItem
                sx={{ backgroundColor: 'white', marginRight: 3, opacity: 0.5 }}
            />

            <Caption>{caption}</Caption>
        </GradientBox>
    );
});
