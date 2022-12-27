import { Box, Divider, Grid } from '@mui/material';
import { SectionTitle, SectionWrapper, VisionCard } from 'components';

import visions from './visions.json';

export const Vision = () => {
    return (
        <SectionWrapper id="vision" sx={{ marginBottom: 21 }}>
            <SectionTitle sx={{ textAlign: 'center' }}>VISIONS</SectionTitle>
            <Divider
                sx={{
                    width: '5%',
                    backgroundColor: 'white',
                    margin: '8px auto 56px auto',
                }}
            />
            <Box>
                <Grid container columnSpacing={6} rowSpacing={4}>
                    {visions.payload.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <VisionCard
                                id={item.id}
                                title={item.title}
                                logo={item.logo}
                                caption={item.caption}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </SectionWrapper>
    );
};
