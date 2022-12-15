import { Grid } from '@mui/material';
import { PartnerCard, SectionTitle, SectionWrapper } from 'components';
import React from 'react';
import partners from './partners.json';

export const Partners = () => {
    const renderPartners = React.useCallback(() => {
        return partners.payload.map(({ id, partnerLogo }) => (
            <Grid item xs={4} sm={4} md={4} key={id}>
                <PartnerCard partnerLogo={partnerLogo} />
            </Grid>
        ));
    }, []);

    return (
        <SectionWrapper sx={{ marginBottom: 21 }}>
            <SectionTitle sx={{ textAlign: 'center' }}>PARTNERS</SectionTitle>
            <Grid
                container
                spacing={{ xs: 1, md: 3 }}
                columns={{ xs: 2, sm: 16, md: 12 }}
            >
                {renderPartners()}
            </Grid>
        </SectionWrapper>
    );
};
