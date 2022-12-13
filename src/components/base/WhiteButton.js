import { Button } from '@mui/material';
import { cyan } from '@mui/material/colors';
import { styled } from '@mui/system';

const StyledWhiteButton = styled(Button)(({ theme }) => ({
  borderRadius: 16,
  textTransform: 'capitalize',
  fontSize: 14,
  color: cyan[400],
  fontWeight: 'bold',
  backgroundColor: 'white',
}));

export const WhiteButton = ({ children, ...props }) => {
  return <StyledWhiteButton {...props}>{children}</StyledWhiteButton>;
};
