import { Box } from '@mui/material';
import { AppButton, SectionWrapper, WhiteButton } from 'components';
import { MainTitle } from './MainTitle';

const HomePage = () => {
  return (
    <SectionWrapper sx={{ margin: '178px auto', textAlign: 'center' }}>
      <MainTitle />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <AppButton>Apply now</AppButton>
        <WhiteButton>Contact us</WhiteButton>
      </Box>
    </SectionWrapper>
  );
};
export default HomePage;
