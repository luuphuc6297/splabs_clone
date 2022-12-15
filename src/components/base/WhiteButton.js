import { Button } from '@mui/material';
import { blue } from '@mui/material/colors';
import { styled } from '@mui/system';

const StyledWhiteButton = styled(Button)(({ theme }) => ({
    width: 128,
    borderRadius: 24,
    textTransform: 'capitalize',
    fontSize: 14,
    fontWeight: 'bold',
    color: blue[300],
    padding: 8,
    marginRight: 8,
    backgroundColor: 'white',
    '&:hover': {},
}));

export const WhiteButton = ({ children, ...props }) => {
    return <StyledWhiteButton {...props}>{children}</StyledWhiteButton>;
};
