import { Box } from '@mui/material';
import { useTheme } from '@mui/material';
import { SectionTitle, SectionCaption } from 'components';

export const Description = () => {
    const theme = useTheme();
    return (
        <Box id="about-us" sx={{ width: '100%' }}>
            <SectionTitle
                sx={{
                    marginBottom: 2,
                    [theme.breakpoints.down('md')]: {
                        textAlign: 'center',
                    },
                }}
            >
                ABOUT US
            </SectionTitle>
            <SectionCaption sx={{ textAlign: 'left', marginBottom: 3 }}>
                SPLabs is a blockchain hub operating in countries across the
                globe Vietnam, Korea, and Japan, and has created various GameFi
                metaverse WEB 3.0-based platforms and products. With experience
                building on BNB, AVAX, ETH, MATIC, and GATE. It is a company
                that challenges the global Blockchain Industry with over 30+
                Degens working with us. SPLabs Japan was recently opened due to
                the rising popularity of blockchain within the country.
            </SectionCaption>
            <SectionCaption sx={{ textAlign: 'left' }}>
                SPLabs has built up various games and applications on WEB3 and
                is a company that strives to enable various projects around the
                world to float with blockchain through the experience SPLabs has
                gathered within the projects they have made.
            </SectionCaption>
        </Box>
    );
};
