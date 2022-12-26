import { Box } from '@mui/system';
import { HomeTitle, SectionCaption } from 'components';
import './cssTyping.css';
import { useMobile } from 'hooks/useMobile';

export const MainTitle = () => {
    const isMobile = useMobile();
    return (
        <>
            <Box>
                <Box className={isMobile ? null : 'css-typing'}>
                    <HomeTitle>Welcome to SPLabs!</HomeTitle>
                </Box>
            </Box>
            <SectionCaption sx={{ marginBottom: 2 }}>
                We empower founder to build, fund, and scale in the Web3 world
                for ambitious start up
            </SectionCaption>
        </>
    );
};
