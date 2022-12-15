import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const StepBox = styled(Box)(({ theme }) => ({
    width: 32,
    height: 32,
    border: '0.5px solid',
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
