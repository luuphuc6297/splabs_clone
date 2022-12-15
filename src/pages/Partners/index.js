import { Box, Grid } from '@mui/material';
import { PartnerCard, SectionTitle, SectionWrapper } from 'components';
import React from 'react';
import partners from './partners.json';

export const Partners = () => {
    return (
        <SectionWrapper sx={{ paddingBottom: 20 }}>
            <SectionTitle sx={{ textAlign: 'center', marginBottom: 8 }}>
                PARTNERS
            </SectionTitle>
            <Box>
                <Grid
                    container
                    rowSpacing={{ xs: 3, md: 4 }}
                    columnSpacing={{ xs: 3, md: 4 }}
                    columns={{ xs: 12, md: 15 }}
                    justifyContent="center"
                >
                    {partners.payload.map(({ id, partnerLogo }) => (
                        <Grid item xs={4} md={3} key={id}>
                            <PartnerCard partnerLogo={partnerLogo} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </SectionWrapper>
    );
};
