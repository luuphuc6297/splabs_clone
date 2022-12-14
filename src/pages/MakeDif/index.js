import { Box } from '@mui/material';
import {
  CategoryCard,
  SectionCaption,
  SectionTitle,
  SectionWrapper,
} from 'components';
import React from 'react';
import categories from './categories.json';

export const MakeDifferent = () => {
  const renderCategory = React.useCallback(() => {
    return categories.payload.map(({ id, title, lists, logo }) => (
      <CategoryCard key={id} title={title} lists={lists} logo={logo} />
    ));
  }, []);

  return (
    <SectionWrapper
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 21,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <SectionTitle>WHAT MAKES US DIFFERENT</SectionTitle>
        <SectionCaption>
          Exciting results demonstrate some of what our team can do for you!
        </SectionCaption>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'center',
          justifyContent: 'end',
          gridGap: 4,
          gap: 4,
        }}
      >
        {renderCategory()}
      </Box>
    </SectionWrapper>
  );
};
