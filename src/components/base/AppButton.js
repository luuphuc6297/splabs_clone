import { Button, styled } from '@mui/material';
import { grey } from '@mui/material/colors';

const StyledAppButton = styled(Button)(({ theme }) => ({
    width: 144,
    height: 48,
    borderRadius: 24,
    textTransform: 'capitalize',
    fontSize: 14,
    fontFamily: 'PoppinsBold',
    fontWeight: 'bold',
    color: grey[50],
    padding: 8,
    marginRight: 8,
    transition: 'all 0.5s ease 0s',
    background:
        'linear-gradient(336.08deg, rgb(220, 102, 255) 20.7%, rgb(3, 170, 249) 97.43%)',
    '&:hover': {
        transform: 'scale(1.01) !important',
        background:
            'linear-gradient(336.08deg,rgb(3, 170, 249)  20.7%,rgb(220, 102, 255)  97.43%)',
    },
}));

export const AppButton = ({ children, ...props }) => {
    return <StyledAppButton {...props}>{children}</StyledAppButton>;
};
