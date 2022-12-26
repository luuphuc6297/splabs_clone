import { Box, styled } from '@mui/material';
import { AppButton, SectionWrapper, WhiteButton } from 'components';
import { AiFillPhone } from 'react-icons/ai';
import { MainTitle } from './MainTitle';

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
                <AppButton>Apply now</AppButton>
                <WhiteButton endIcon={<PhoneIcon />}>Contact us</WhiteButton>
            </Box>
        </SectionWrapper>
    );
};
export default HomePage;
