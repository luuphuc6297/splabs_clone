import { Grid } from '@mui/material';
import { SectionWrapper } from 'components';
import { Banner } from './Banner';
import { Description } from './Description';
import { Presentation } from './Presentation';

const AboutUs = () => {
    return (
        <SectionWrapper
            id="about_us"
            sx={{
                paddingTop: 12,
                marginBottom: 21,
            }}
        >
            <Grid container columnSpacing={3} rowSpacing={3}>
                <Grid item xs={12} md={6}>
                    <Banner />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Description />
                </Grid>
            </Grid>

            <Presentation />
        </SectionWrapper>
    );
};

export default AboutUs;
