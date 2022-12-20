import { Box } from '@mui/material';
import { SectionCaption, SectionTitle, SectionWrapper } from 'components';
import { StartGrowingForm } from './Form';
import { GradientBox } from 'components';
export const StartGrowing = () => {
    return (
        <SectionWrapper sx={{ paddingBottom: 24 }}>
            {/* <Box
                sx={{
                    border: '1px solid #19c0ff',
                    borderRadius: 8,
                    padding: '56px 108px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            > */}
            <GradientBox
                sx={{
                    padding: '56px 108px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <SectionTitle sx={{ textAlign: 'center', marginBottom: 2 }}>
                    Start Growing
                </SectionTitle>
                <SectionCaption sx={{ textAlign: 'center' }}>
                    Turn your efforts and our power into your money machine!
                </SectionCaption>
                <SectionCaption
                    sx={{
                        textAlign: 'center',
                        maxWidth: '520px',
                        margin: '0 auto 20px auto',
                    }}
                >
                    Tell us your story: Your ideas, progress, team and vision;
                    After receiving your story, we will contact you within 3
                    business days.
                </SectionCaption>
                <StartGrowingForm />
            </GradientBox>

            {/* </Box> */}
        </SectionWrapper>
    );
};
