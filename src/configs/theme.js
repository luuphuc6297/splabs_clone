import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(26, 27, 29)',
    },
    text: {
      primary: 'rgb(26, 27, 29)',
    },
  },
  typography: {
    fontFamily: ['-apple-system', '"Linik Sans"', 'Arial', 'sans-serif'].join(
      ','
    ),
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    caption: {
      fontSize: '1rem',
      fontWeight: 'normal',
    },
  },
});

export default theme;
