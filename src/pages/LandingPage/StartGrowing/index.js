import { useTheme } from '@mui/material';
import {
    LeftToRightGradientBox,
    SectionCaption,
    SectionTitle,
    SectionWrapper,
} from 'components';
import { StartGrowingForm } from './Form';
export const StartGrowing = () => {
    const theme = useTheme();

    return (
        <SectionWrapper id="start-growing" sx={{ paddingBottom: 15 }}>
            <LeftToRightGradientBox
                sx={{
                    padding: '56px 108px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    boxShadow: 'rgb(255 255 255 / 60%) 0px 0px 8px 0px',
                    [theme.breakpoints.down('480')]: {
                        padding: '32px 40px',
                    },
                }}
            >
                <SectionTitle sx={{ textAlign: 'center', marginBottom: 2 }}>
                    Contact Us
                </SectionTitle>
                <SectionCaption
                    sx={{ textAlign: 'center', margin: '0 auto 24px auto' }}
                >
                    From Layer 1 development to project development and
                    business, we solve everything together.
                </SectionCaption>
                {/* <SectionCaption
                    sx={{
                        textAlign: 'center',
                        maxWidth: '520px',
                        margin: '0 auto 20px auto',
                    }}
                >
                    Tell us your story: Your ideas, progress, team and vision;
                    After receiving your story, we will contact you within 3
                    business days.
                </SectionCaption> */}
                <StartGrowingForm />
            </LeftToRightGradientBox>

            {/* </Box> */}
        </SectionWrapper>
    );
};
