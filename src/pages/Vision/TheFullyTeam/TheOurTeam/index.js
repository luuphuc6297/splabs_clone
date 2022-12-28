import { Box, Container, Button } from '@mui/material';
import { SectionTitle, TheOurTeamCard } from 'components';
import { useState } from 'react';
import ourTeam from './ourTeam.json';

export const TheOurTeam = () => {
    const [isShowMore, setIsShowMore] = useState(true);

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
                {ourTeam.payload
                    .slice(0, isShowMore ? 6 : undefined)
                    .map((item) => (
                        <TheOurTeamCard
                            id={item.id}
                            name={item.name}
                            position={item.position}
                            descriptions={item.descriptions}
                        />
                    ))}
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                {isShowMore && (
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
                )}
            </Box>
        </Container>
    );
};
