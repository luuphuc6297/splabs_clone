import { Box, Divider, Grid } from '@mui/material';
import { SectionTitle, SectionWrapper, ServicesCard } from 'components';
import services from './services.json';
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
                    margin: '8px auto 56px auto',
                    textAlign: 'center',
                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 5,
                    justifyContent: 'space-between',
                }}
            >
                {services.payload.map((item) => (
                    <ServicesCard
                        id={item.id}
                        title={item.title}
                        logo={item.logo}
                        description={item.description}
                    />
                ))}
            </Box>
        </SectionWrapper>
    );
};
