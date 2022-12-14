import { Box } from '@mui/material';
import { SectionWrapper } from 'components';
import { Banner } from './Banner';
import { Description } from './Description';
import { Presentation } from './Presentation';
const AboutUs = () => {
  return (
    <SectionWrapper
      sx={{ display: 'flex', flexDirection: 'column', marginBottom: 21 }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 8,
        }}
      >
        <Banner />
        <Description />
      </Box>

      <Presentation />
    </SectionWrapper>
  );
};

export default AboutUs;
