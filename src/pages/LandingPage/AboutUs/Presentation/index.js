import { Box, Grid } from '@mui/material';
import { PresentationCard } from 'components';
import React from 'react';
import presentation from './presentation.json';

export const Presentation = () => {
    return (
        <Box sx={{ marginTop: 5 }}>
            <Grid container columnSpacing={3} rowSpacing={3}>
                {presentation.payload.map((pres) => (
                    <Grid item xs={12} md={4} key={pres.id}>
                        <PresentationCard {...pres} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
