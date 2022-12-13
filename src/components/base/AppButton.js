import { Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledAppButton = styled(Button)(({ theme }) => ({
  borderRadius: 16,
  textTransform: 'capitalize',
  fontSize: 14,
  color: 'black',
  fontWeight: 'bold',
}));

export const AppButton = ({ children, ...props }) => {
  return <StyledAppButton {...props}>{children}</StyledAppButton>;
};
