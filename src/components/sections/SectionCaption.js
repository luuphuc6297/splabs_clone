import { Typography } from '@mui/material';

export const SectionCaption = ({ children, ...props }) => {
  return (
    <Typography variant="caption" component="p" {...props}>
      {children}
    </Typography>
  );
};
