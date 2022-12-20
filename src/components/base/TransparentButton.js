import { Button } from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material';

const StyledTransparentBtn = styled(Button)(({ theme }) => ({
    textTransform: 'capitalize',
    border: '1px solid rgb(152, 202, 254)',
    height: 32,
    width: 96,
    borderRadius: 16,
    fontWeight: 'bold',
    color: grey[50],
    '&:hover': {
        background:
            'linear-gradient(336.08deg, rgb(220, 102, 255) 20.7%, rgb(3, 170, 249) 97.43%)',
        transition: 'all 0.5s ease 0s',
        transform: 'scale(1.025) !important',
    },
}));

export const TransparentButton = ({ children, ...props }) => {
    return <StyledTransparentBtn {...props}>{children}</StyledTransparentBtn>;
};
