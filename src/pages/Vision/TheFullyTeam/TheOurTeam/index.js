import { Box, Grid } from '@mui/material';
import { SectionTitle, SectionWrapper, TheOurTeamCard } from 'components';
import ourTeam from './ourTeam.json';

export const TheOurTeam = () => {
    return (
        <SectionWrapper id="the_our_team" sx={{ marginBottom: 21 }}>
            <SectionTitle sx={{ fontSize: 32, textAlign: 'left', marginBottom: 4 }}>
                OUR TEAM
            </SectionTitle>
            <Box>
                <Grid container columnSpacing={6} rowSpacing={4}>
                    {ourTeam.payload.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <TheOurTeamCard
                                id={item.id}
                                name={item.name}
                                position={item.position}
                                descriptions={item.descriptions}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </SectionWrapper>
    );
};
