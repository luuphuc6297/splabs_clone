import { Box } from '@mui/material';
import { SectionWrapper } from 'components';
import { Banner } from './Banner';
import { Description } from './Description';

const AboutUs = () => {
  return (
    <SectionWrapper sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Banner />
        <Description />
      </Box>
      <Box>abc</Box>
    </SectionWrapper>
  );
};

export default AboutUs;
