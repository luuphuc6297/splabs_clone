import { SectionTitle, SectionWrapperFullWidth } from 'components';
import { ListProject } from './ListProject';
import { NewProject } from './NewProject';

export const Project = () => {
    return (
        <SectionWrapperFullWidth sx={{ paddingBottom: 20 }}>
            <SectionTitle sx={{ textAlign: 'center', marginBottom: 5 }}>
                PROJECTS
            </SectionTitle>
            <NewProject />
            <ListProject />
        </SectionWrapperFullWidth>
    );
};
