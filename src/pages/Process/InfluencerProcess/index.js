import {
    SectionWrapper,
    SectionTitle,
    InfluencerProcessCard,
} from 'components';
import { Divider, Box, Grid } from '@mui/material';
import influencer from './influencer.json';
export const InfluencerProcess = () => {
    return (
        <SectionWrapper id="influencer_process" sx={{ marginBottom: 21 }}>
            <SectionTitle sx={{ textAlign: 'center' }}>
                INFLUENCER PROCESS
            </SectionTitle>
            <Divider
                sx={{
                    width: '5%',
                    backgroundColor: 'white',
                    margin: '8px auto 56px auto',
                }}
            />
            <Box>
                <Grid container columnSpacing={2} rowSpacing={2}>
                    {influencer.payload.map((item) => (
                        <Grid item xs={12} sm={6} md={6} key={item.id}>
                            <InfluencerProcessCard
                                id={item.id}
                                step={item.step}
                                caption={item.caption}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </SectionWrapper>
    );
};
