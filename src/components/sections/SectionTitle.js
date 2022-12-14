import { styled, Typography } from '@mui/material';

const StyledSectionTile = styled(Typography)(({ theme }) => ({
    fontFamily: 'PoppinsBold',
}));

export const SectionTitle = ({ children, ...props }) => {
    return (
        <StyledSectionTile variant="h2" {...props}>
            {children}
        </StyledSectionTile>
    );
};
