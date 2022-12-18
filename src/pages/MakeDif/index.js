import { Box, Grid } from '@mui/material';
import {
    CategoryCard,
    SectionCaption,
    SectionTitle,
    SectionWrapper,
} from 'components';
import React from 'react';
import categories from './categories.json';
import { useMobile } from 'hooks/useMobile';

export const MakeDifferent = () => {
    const isMobile = useMobile();
    return (
        <SectionWrapper
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: 20,
                flexDirection: isMobile ? 'column' : 'initial',
                gap: isMobile ? '30px' : '0',
            }}
        >
            <Box sx={{ width: '100%' }}>
                <SectionTitle>WHAT MAKES</SectionTitle>
                <SectionTitle>US DIFFERENT</SectionTitle>
                <SectionCaption
                    sx={{
                        marginTop: 2,
                        maxWidth: isMobile ? '100%' : 300,
                    }}
                >
                    Exciting results demonstrate some of what our team can do
                    for you!
                </SectionCaption>
            </Box>
            <Box>
                <Grid container columnSpacing={5} rowSpacing={5}>
                    {categories.payload.map(({ id, title, lists, logo }) => (
                        <Grid item xs={12} md={6} key={id}>
                            <CategoryCard
                                title={title}
                                lists={lists}
                                logo={logo}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </SectionWrapper>
    );
};
