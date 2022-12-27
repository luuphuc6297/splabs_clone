import { Box, Divider } from '@mui/material';
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
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 6,
                }}
            >
                {visions.payload.map((item) => (
                    <VisionCard
                        id={item.id}
                        title={item.title}
                        logo={item.logo}
                        caption={item.caption}
                    />
                ))}
            </Box>
        </SectionWrapper>
    );
};
