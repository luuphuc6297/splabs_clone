import { Box } from '@mui/material';
import { SectionCaption, SectionTitle, SectionWrapper } from 'components';
import { StartGrowingForm } from './Form';

export const StartGrowing = () => {
    return (
        <SectionWrapper sx={{ paddingBottom: 20 }}>
            <Box
                sx={{
                    border: '2px solid #19c0ff',
                    borderRadius: 8,
                    boxShadow: '0px 0px 18px 0px rgba(0,0,0,0.75)',
                    padding: '60px 100px',
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
            </Box>
        </SectionWrapper>
    );
};
