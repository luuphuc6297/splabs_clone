import { useMediaQuery, useTheme } from '@mui/material';

export const useMobile = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.up('md'));

  return {
    mobile,
  };
};
