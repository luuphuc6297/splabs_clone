import { Box, styled } from '@mui/material';
import { AdvertisementCard } from 'components';

const AdLogo = styled('img')(({ theme }) => ({
    width: '100%',
    height: '100%',
    objectFit: 'contain',
}));

export const AdvertisementSection = ({ id, adLogo, caption, ...props }) => {
    return (
        <Box
            id={id}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 6,
                // gap: 8,
                flexDirection:
                    id === 'the_second_advertisement' ? 'row-reverse' : 'row',
            }}
            {...props}
        >
            <Box sx={{ width: 380 }}>
                <AdLogo src={adLogo} />
            </Box>
            <AdvertisementCard id={id} caption={caption} />
        </Box>
    );
};
