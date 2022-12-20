import { Box, styled, Typography } from '@mui/material';
import React from 'react';

const StepBox = styled(Box)(({ theme }) => ({
    width: 40,
    height: 40,
    borderRadius: 8,
    marginBottom: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    color: 'white',
    transition: 'all 0.1s ease-in-out',
    position: 'relative',
    minHeight: '100%',
    boxShadow: 'rgb(255 255 255 / 60%) 0px 0px 15px 0px',
    '&::before': {
        content: "''",
        position: 'absolute',
        inset: '0px',
        borderRadius: 8,
        padding: ' 1px',
        background:
            'linear-gradient(90.22deg, rgb(220, 102, 255), rgb(3, 170, 249))',
        WebkitMask:
            'linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box content-box, linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)',
        WebkitMaskComposite: 'xor',
    },
}));

const Step = styled(Typography)(({ theme }) => ({
    fontSize: 18,
    fontFamily: 'PoppinsBold',
    fontWeight: 'bold',
}));

const TitleBox = styled(Box)(({ theme }) => ({}));

const Title = styled(Typography)(({ theme }) => ({
    marginBottom: 16,
}));

const Caption = styled(Typography)(({ theme }) => ({}));

export const ProjectCard = React.memo(({ step, title, caption }) => {
    return (
        <Box
            data-aos="zoom-in"
            data-aos-duration="5000"
            data-aos-easing="linear"
            sx={{
                '&:hover': {
                    transform: 'scale(1.02) !important',
                }
            }}
        >
            <StepBox>
                <Step>{step}</Step>
            </StepBox>
            <TitleBox>
                <Title variant="h3">{title}</Title>
                <Caption>{caption}</Caption>
            </TitleBox>
        </Box>
    );
});
