import { Box, Grid } from '@mui/material';
import {
    ProjectCard,
    SectionCaption,
    SectionTitle,
    SectionWrapper
} from 'components';
import projects from './projects.json';

export const EnforceProject = () => {
    return (
        <SectionWrapper sx={{ marginBottom: 21 }}>
            <SectionTitle sx={{ textAlign: 'center' }}>Enforce</SectionTitle>
            <SectionTitle sx={{ textAlign: 'center' }}>
                Your Project
            </SectionTitle>
            <SectionCaption
                sx={{
                    textAlign: 'center',
                    margin: '32px auto',
                    maxWidth: 500,
                }}
            >
                We aim to become the most trustworthy community, breaking
                through barriers of entry to bring talented individuals into the
                world
            </SectionCaption>
            <Box
                sx={{
                    border: '1px solid #19c0ff',
                    borderRadius: 8,
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
            </Box>
        </SectionWrapper>
    );
};
