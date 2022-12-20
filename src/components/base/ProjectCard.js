import { Box, styled, Typography } from '@mui/material';
import React from 'react';

const StepBox = styled(Box)(({ theme }) => ({
    width: 32,
    height: 32,
    borderRadius: 8,
    marginBottom: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const Step = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
}));

const TitleBox = styled(Box)(({ theme }) => ({}));

const Title = styled(Typography)(({ theme }) => ({
    marginBottom: 16,
    fontWeight: 'bold',
}));

const Caption = styled(Typography)(({ theme }) => ({}));

export const ProjectCard = React.memo(({ step, title, caption }) => {
    return (
        <Box>
            <StepBox
                sx={{
                    background: `url('/images/border/border_step_number.png')`,
                    backgroundPosition: 'center',
                    backgroundSize: '150% 150%',
                    objectFit: 'center',
                }}
            >
                <Step>{step}</Step>
            </StepBox>
            <TitleBox>
                <Title variant="h3">{title}</Title>
                <Caption>{caption}</Caption>
            </TitleBox>
        </Box>
    );
});
