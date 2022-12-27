import { Box, Divider, Grid } from '@mui/material';
import { SectionTitle, SectionWrapper, VisionCard } from 'components';

export const ServicesAndProcess = () => {
    return (
        <SectionWrapper id="vision" sx={{ marginBottom: 21 }}>
            <SectionTitle sx={{ textAlign: 'center', marginBottom: 2 }}>
                SERVICES & PROCESS
            </SectionTitle>
            <Divider
                sx={{
                    width: '5%',
                    backgroundColor: 'white',
                    marginBottom: 6,
                    margin: '0 auto',
                    textAlign: 'center',
                }}
            />
            <Box>
                <Grid container columnSpacing={6} rowSpacing={4}>
                    {/* {visions.payload.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <VisionCard
                                id={item.id}
                                title={item.title}
                                logo={item.logo}
                                caption={item.caption}
                            />
                        </Grid>
                    ))} */}
                </Grid>
            </Box>
        </SectionWrapper>
    );
};
