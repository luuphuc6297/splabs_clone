import { Box, styled } from '@mui/material';

const StyleSectionWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
}));

export const SectionWrapperFullWidth = ({ id, children, ...props }) => {
  return (
    <StyleSectionWrapper id={id} {...props}>
      {children}
    </StyleSectionWrapper>
  );
};
