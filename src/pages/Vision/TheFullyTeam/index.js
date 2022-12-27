import { SectionTitle, SectionWrapperFullWidth, SectionWrapper } from 'components';
import { ManagementTeam } from './ManagementTeam';
import { TheOurTeam } from './TheOurTeam';
export const TheFullyTeam = () => {
    return (
        <SectionWrapperFullWidth sx={{ paddingBottom: 15 }}>
            <SectionTitle sx={{ textAlign: 'center', marginBottom: 5 }}>
                THE TEAM
            </SectionTitle>
            <SectionWrapper>
                <SectionTitle
                    sx={{ fontSize: 32, textAlign: 'left', marginBottom: 4 }}
                >
                    MANAGEMENT TEAM
                </SectionTitle>
            </SectionWrapper>

            <ManagementTeam />
            <TheOurTeam />
        </SectionWrapperFullWidth>
    );
};
