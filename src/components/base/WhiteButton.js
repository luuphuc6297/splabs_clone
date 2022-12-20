import { Button, styled } from '@mui/material';
import { grey } from '@mui/material/colors';
const StyledWhiteButton = styled(Button)(({ theme }) => ({
    width: 144,
    height: 48,
    fontFamily: 'PoppinsBold',
    borderRadius: 24,
    textTransform: 'capitalize',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgb(3, 170, 249)',
    padding: 8,
    marginRight: 8,
    backgroundColor: 'white',
    border: `0.5px solid ${grey[50]}`,
    '&:hover': {
        color: theme.palette.text.primary,
        // border: `0.5px solid ${grey[50]}`,
    },
}));

export const WhiteButton = ({ children, ...props }) => {
    return <StyledWhiteButton {...props}>{children}</StyledWhiteButton>;
};
