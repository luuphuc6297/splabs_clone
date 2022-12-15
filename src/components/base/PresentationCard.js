import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Step = styled(Typography)(({ theme }) => ({
    marginBottom: 16,
}));

const Title = styled(Typography)(({ theme }) => ({
    marginBottom: 16,
}));

const TopCaption = styled(Typography)(({ theme }) => ({
    marginBottom: 24,
}));

export const PresentationCard = React.memo(
    ({ step, title, top_caption, bot_caption }) => {
        return (
            <Box
                sx={{
                    width: 368,
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '32px 64px 32px 32px',
                    // border: '1px solid',
                    borderRadius: 4,
                    textAlign: 'left',
                    backgroundImage: `url('/images/background/presentation_background.png')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    objectFit: 'contain',
                    backgroundPosition: 'center',
                }}
            >
                <Step variant="h3">{step}</Step>
                <Title variant="h3">{title}</Title>
                <TopCaption variant="caption">{top_caption}</TopCaption>
                <Typography variant="caption">{bot_caption}</Typography>
            </Box>
        );
    }
);
