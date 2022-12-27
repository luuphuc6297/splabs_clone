import { Box, styled } from '@mui/material';

const TopBanner = styled('img')(({ theme }) => ({
    width: '100%',
    height: '100%',
}));
const BotBanner = styled('img')(({ theme }) => ({
    width: '100%',
    height: '100%',
}));

export const ServicesBanner = () => {
    return (
        <Box sx={{ marginBottom: 10 }}>
            <Box>
                <TopBanner src="/images/services/top.png" />
            </Box>
            <Box>
                <BotBanner src="/images/services/bot.png" />
            </Box>
        </Box>
    );
};
