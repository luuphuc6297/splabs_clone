import { Box } from '@mui/material';
import {
  ProjectCard,
  SectionCaption,
  SectionTitle,
  SectionWrapper
} from 'components';
import React from 'react';
import projects from './projects.json';

export const EnforceProject = () => {
  const renderProjects = React.useCallback(() => {
    return projects.payload.map((project) => (
      <ProjectCard
        key={project.id}
        id={project.id}
        step={project.step}
        title={project.title}
        caption={project.caption}
      />
    ));
  }, []);

  return (
    <SectionWrapper sx={{ marginBottom: 21 }}>
      <SectionTitle sx={{ textAlign: 'center' }}>Enfore Project</SectionTitle>
      <SectionCaption
        sx={{
          textAlign: 'center',
          marginBottom: 8,
          gridGap: 4,
          gap: 4,
          justifyContent: 'space-between',
        }}
      >
        We aim to become the most trustworthy community, breaking through
        barriers of entry to bring talented individuals into the world of Web3.
      </SectionCaption>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {renderProjects()}
      </Box>
    </SectionWrapper>
  );
};
