import { useMediaQuery, useTheme } from '@mui/material';

export const useSmallDevice = () => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down('480'));
};
