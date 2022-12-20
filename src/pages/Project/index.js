import { SectionTitle, SectionWrapperFullWidth } from 'components';
import { BotPastProjects } from './BotPastProjects';
import { TopPastProjects } from './TopPastProjects';

export const Project = () => {
    return (
        <SectionWrapperFullWidth sx={{ paddingBottom: 20 }}>
            <SectionTitle sx={{ textAlign: 'center', marginBottom: 5 }}>
                PROJECTS
            </SectionTitle>
            <TopPastProjects />
            <BotPastProjects />
        </SectionWrapperFullWidth>
    );
};
