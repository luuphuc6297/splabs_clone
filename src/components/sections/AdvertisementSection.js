import { Box, styled } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AdvertisementCard } from 'components';

const AdLogo = styled('img')(({ theme }) => ({
    width: '100%',
    height: '100%',
    objectFit: 'contain',
}));

export const AdvertisementSection = ({ id, adLogo, caption, ...props }) => {
    const theme = useTheme();
    return (
        <Box
            id={id}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: 6,
                flexWrap: 'wrap',
                // gap: 8,
                flexDirection:
                    id === 'the_second_advertisement' ? 'row-reverse' : 'row',
                [theme.breakpoints.down('md')]: {
                    justifyContent: 'center',
                },
            }}
            {...props}
        >
            <Box
                sx={{
                    width: 380,
                    [theme.breakpoints.down('md')]: {
                        marginBottom: 3,
                        textAlign: 'center',
                    },
                }}
            >
                <AdLogo src={adLogo} />
            </Box>
            <AdvertisementCard id={id} caption={caption} />
        </Box>
    );
};
