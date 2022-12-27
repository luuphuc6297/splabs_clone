import { Box, Divider, Grid } from '@mui/material';
import { SectionTitle, SectionWrapper, SpadBusinessCard } from 'components';
import business from './business.json';

export const Business = () => {
    return (
        <SectionWrapper id="spad_business" sx={{ marginBottom: 21 }}>
            <SectionTitle sx={{ textAlign: 'center' }}>
                SPAD BUSINESS
            </SectionTitle>
            <Divider
                sx={{
                    width: '5%',
                    backgroundColor: 'white',
                    margin: '8px auto 56px auto',
                }}
            />
            <Box>
                <Grid container columnSpacing={6} rowSpacing={4}>
                    {business.payload.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <SpadBusinessCard
                                id={item.id}
                                title={item.title}
                                logo={item.logo}
                                lists={item.lists}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </SectionWrapper>
    );
};
