import { Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledTransparentBtn = styled(Button)(({ theme }) => ({
    textTransform: 'capitalize',
    border: '1px solid rgb(152, 202, 254)',
    height: 32,
    width: 96,
    borderRadius: 16,
    fontWeight: 'bold',
    '&:hover': {
        background:
            'linear-gradient(336.08deg, rgb(159, 140, 204) 10.7%, rgb(45, 145, 200) 97.43%)',
    },
}));

export const TransparentButton = ({ children, ...props }) => {
    return <StyledTransparentBtn {...props}>{children}</StyledTransparentBtn>;
};
