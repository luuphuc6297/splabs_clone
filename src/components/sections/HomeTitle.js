import { Typography } from '@mui/material';
import { styled } from '@mui/material';

const StyledHomeTitle = styled(Typography)(({ theme }) => ({}));

export const HomeTitle = ({ children, ...props }) => {
    return (
        <StyledHomeTitle variant="h1" {...props}>
            {children}
        </StyledHomeTitle>
    );
};
