import {
    SectionCaption,
    SectionTitle,
    SectionWrapper,
    OfferCard,
} from 'components';
import { Box, Grid } from '@mui/material';
import offers from './offers.json';

export const Offers = () => {
    return (
        <SectionWrapper id="spad_business">
            <SectionTitle sx={{ textAlign: 'center' }}>
                WHAT DO WE OFFERS
            </SectionTitle>
            <SectionCaption
                sx={{
                    textAlign: 'center',
                    margin: '32px auto',
                    maxWidth: 560,
                }}
            >
                We aim to become the most trustworthy community, breaking
                through barriers of entry to bring talented individuals into the
                world
            </SectionCaption>
            <Box>
                <Grid container columnSpacing={2} rowSpacing={2}>
                    {offers.payload.map((item) => (
                        <Grid item xs={12} sm={4} md={4} key={item.id}>
                            <OfferCard
                                id={item.id}
                                title={item.title}
                                caption={item.caption}
                                logo={item.logo}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </SectionWrapper>
    );
};
