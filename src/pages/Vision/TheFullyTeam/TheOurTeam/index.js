import { Box, Grid, Container } from '@mui/material';
import { SectionTitle, SectionWrapper, TheOurTeamCard } from 'components';
import ourTeam from './ourTeam.json';

export const TheOurTeam = () => {
    return (
        <Container id="the_our_team" sx={{ marginBottom: 21 }} maxWidth="lg">
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

            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 7,
                    justifyContent: 'center',
                }}
            >
                {ourTeam.payload.map((item) => (
                    <TheOurTeamCard
                        id={item.id}
                        name={item.name}
                        position={item.position}
                        descriptions={item.descriptions}
                    />
                ))}
            </Box>
        </Container>
    );
};
