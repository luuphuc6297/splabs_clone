import { Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledTransparentBtn = styled(Button)(({ theme }) => ({
    textTransform: 'capitalize',
    '&:hover': {
        background:
            'linear-gradient(336.08deg, rgb(159, 140, 204) 10.7%, rgb(45, 145, 200) 97.43%)',
    },
}));

export const TransparentButton = ({ children }) => {
    return <StyledTransparentBtn>{children}</StyledTransparentBtn>;
};
