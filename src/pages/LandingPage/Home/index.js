import { Box, styled } from '@mui/material';
import { AppButton, SectionWrapper, WhiteButton } from 'components';
import { AiFillPhone } from 'react-icons/ai';
import { scrollSection } from 'utils';
import { MainTitle } from './MainTitle';
import { grey } from '@mui/material/colors';
const PhoneIcon = styled(AiFillPhone)(({ theme }) => ({
    width: 16,
    height: 16,
}));

const HomePage = () => {
    return (
        <SectionWrapper
            sx={{
                textAlign: 'center',
                height: '82%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'end',
            }}
        >
            <MainTitle />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <AppButton>
                    <a
                        href="https://forms.gle/W2nuZixZv8a7uoD27"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            fontSize: 14,
                            fontFamily: 'PoppinsBold',
                            fontWeight: 'bold',
                            color: grey[50],
                            textDecoration: 'none',
                        }}
                    >
                        Apply now
                    </a>
                </AppButton>
                <WhiteButton
                    onClick={() => scrollSection('#contact_us')}
                    endIcon={<PhoneIcon />}
                >
                    Contact us
                </WhiteButton>
            </Box>
        </SectionWrapper>
    );
};
export default HomePage;
