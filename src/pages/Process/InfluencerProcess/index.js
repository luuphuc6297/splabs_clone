import {
    SectionWrapper,
    SectionTitle,
    InfluencerProcessCard,
} from 'components';
import { Divider, Box, Grid, styled } from '@mui/material';
import influencer from './influencer.json';
import { influencerProcess } from 'assets';
import { useTheme } from '@mui/material/styles';
const StyledProcessBanner = styled('img')(({ theme }) => ({
    width: '100%',
    height: '100%',
    objectFit: 'contain',
}));
export const InfluencerProcess = () => {
    const theme = useTheme();

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
            <Box
                sx={{
                    width: 580,
                    height: 600,
                    marginBottom: 6,
                    margin: '0 auto 56px auto',
                    textAlign: 'center',
                    [theme.breakpoints.down('md')]: {
                        width: 520,
                        height: 560,
                    },
                    [theme.breakpoints.down('sm')]: {
                        width: 480,
                        height: 520,
                    },
                    [theme.breakpoints.down('480')]: {
                        width: 380,
                        height: 420,
                    },
                }}
            >
                <StyledProcessBanner src={influencerProcess} loading="lazy" />
            </Box>
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
