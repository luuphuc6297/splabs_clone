import { Box, Grid } from '@mui/material';
import { PartnerCard, SectionTitle, SectionWrapper } from 'components';
import exchangePartners from './exchangePartners.json';
import partners from './partners.json';
export const Partners = () => {
    return (
        <SectionWrapper id="sp-partners" sx={{ paddingBottom: 20 }}>
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
                    sx={{ marginBottom: 8 }}
                >
                    {partners.payload.map(({ id, partnerLogo }) => (
                        <Grid item xs={4} md={3} key={id}>
                            <PartnerCard partnerLogo={partnerLogo} />
                        </Grid>
                    ))}
                </Grid>
                <SectionTitle
                    sx={{
                        textAlign: 'center',
                        marginBottom: 8,
                        fontSize: '2rem',
                    }}
                >
                    EXCHANGE PARTNERS
                </SectionTitle>
                <Grid
                    container
                    rowSpacing={{ xs: 3, md: 4 }}
                    columnSpacing={{ xs: 3, md: 4 }}
                    columns={{ xs: 12, md: 15 }}
                    justifyContent="center"
                >
                    {exchangePartners.payload.map(({ id, partnerLogo }) => (
                        <Grid item xs={4} md={3} key={id}>
                            <PartnerCard partnerLogo={partnerLogo} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </SectionWrapper>
    );
};
