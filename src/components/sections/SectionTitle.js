import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledSectionTile = styled(Typography)(({ theme }) => ({}));

export const SectionTitle = ({ children, ...props }) => {
  return (
    <StyledSectionTile variant="h1" {...props}>
      {children}
    </StyledSectionTile>
  );
};
