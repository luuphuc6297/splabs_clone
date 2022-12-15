import { SectionCaption, SectionTitle, SectionWrapper } from 'components';
import { StartGrowingForm } from './Form';
export const StartGrowing = () => {
    return (
        <SectionWrapper sx={{ padding: 6 }}>
            <SectionTitle sx={{ textAlign: 'center' }}>
                Start Growing
            </SectionTitle>
            <SectionCaption sx={{ textAlign: 'center' }}>
                Turn your efforts and our power into your money machine! Tell us
                your story: Your ideas, progress, team and vision; After
                receiving your story, we will contact you within 3 business
                days.
            </SectionCaption>

            <StartGrowingForm />
        </SectionWrapper>
    );
};
