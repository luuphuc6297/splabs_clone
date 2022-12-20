import { styled, Typography } from '@mui/material';

const StyledHomeTitle = styled(Typography)(({ theme }) => ({}));

export const HomeTitle = ({ children, ...props }) => {
    return (
        <StyledHomeTitle variant="h1" {...props}>
            {children}
        </StyledHomeTitle>
    );
};
