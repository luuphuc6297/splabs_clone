import { Box, Button, Grid } from '@mui/material';
import { SectionTitle, SectionWrapper, TheOurTeamCard } from 'components';
import { useState } from 'react';
import ourTeam from './ourTeam.json';

export const TheOurTeam = () => {
    const [isShowMore, setIsShowMore] = useState(true);

    return (
        <SectionWrapper id="the_our_team" sx={{ marginBottom: 21 }}>
            <SectionTitle
                sx={{
                    fontSize: 32,
                    textAlign: 'left',
                    marginBottom: 4,
                    marginTop: 21,
                }}
            >
                OUR TEAM
            </SectionTitle>

            <Grid container columnSpacing={6} rowSpacing={4}>
                {ourTeam.payload
                    .slice(0, isShowMore ? 6 : undefined)
                    .map((item) => (
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
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                <Button
                    onClick={() => setIsShowMore((preState) => !preState)}
                    sx={{
                        color: '#333333',
                        background: '#ffffff',
                        height: 48,
                        width: 130,
                        padding: '15px',
                        borderRadius: 30,
                        '&:hover': {
                            backgroundColor: '#ffffff',
                        },
                    }}
                >
                    Load more
                </Button>
            </Box>
        </SectionWrapper>
    );
};
