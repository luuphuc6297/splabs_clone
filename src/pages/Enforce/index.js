import { Grid } from '@mui/material';
import {
    LeftToRightGradientBox, ProjectCard,
    SectionCaption,
    SectionTitle,
    SectionWrapper
} from 'components';
import projects from './projects.json';

export const EnforceProject = () => {
    return (
        <SectionWrapper id="the_studio" sx={{ marginBottom: 21 }}>
            <SectionTitle sx={{ textAlign: 'center' }}>ENFORCE</SectionTitle>
            <SectionTitle sx={{ textAlign: 'center' }}>
                YOUR PROJECT
            </SectionTitle>
            <SectionCaption
                sx={{
                    textAlign: 'center',
                    margin: '32px auto',
                    maxWidth: 560,
                }}
            >
                We aim to become the most trustworthy community, breaking
                through barriers of entry to bring talented individuals into the
                world
            </SectionCaption>
            <LeftToRightGradientBox
                sx={{
                    padding: '40px 56px',
                }}
            >
                <Grid container columnSpacing={6} rowSpacing={4}>
                    {projects.payload.map((project) => (
                        <Grid item xs={12} sm={6} md={4} key={project.id}>
                            <ProjectCard
                                id={project.id}
                                step={project.step}
                                title={project.title}
                                caption={project.caption}
                            />
                        </Grid>
                    ))}
                </Grid>
            </LeftToRightGradientBox>
        </SectionWrapper>
    );
};
