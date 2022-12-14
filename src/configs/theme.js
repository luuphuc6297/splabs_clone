import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

import PoppinsBlackTTF from 'assets/fonts/Poppins-Black.ttf';
import PoppinsBoldTTF from 'assets/fonts/Poppins-Bold.ttf';
import PoppinsExtraBoldTTF from 'assets/fonts/Poppins-ExtraBold.ttf';
import PoppinsMediumTTF from 'assets/fonts/Poppins-Medium.ttf';
import PoppinsRegularTTF from 'assets/fonts/Poppins-Regular.ttf';
import PoppinsSemiBoldTTF from 'assets/fonts/Poppins-SemiBold.ttf';

const fontFace = `
    @font-face {
        font-family: 'PoppinsBlack';
        src: url(${PoppinsBlackTTF}) format('TrueType');
    }
    @font-face {
        font-family: 'PoppinsBold';
        src: url(${PoppinsBoldTTF}) format('TrueType');
    }
    @font-face {
        font-family: 'PoppinsExtraBold';
        src: url(${PoppinsExtraBoldTTF}) format('TrueType');
    }
    @font-face {
        font-family: 'PoppinsMedium';
        src: url(${PoppinsMediumTTF}) format('TrueType');
    }
    @font-face {
        font-family: 'PoppinsRegular';
        src: url(${PoppinsRegularTTF}) format('TrueType');
    }
    @font-face {
        font-family: 'PoppinsSemiBold';
        src: url(${PoppinsSemiBoldTTF}) format('TrueType');
    }
`;

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(26, 27, 29)',
        },
        text: {
            primary: grey[50],
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'PoppinsRegular',
            '"Linik Sans"',
            'Arial',
            'sans-serif',
        ].join(','),
        h1: {
            fontSize: '3rem',
            fontWeight: 'bold',
            fontFamily: 'PoppinsBold',
        },
        h2: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            fontFamily: 'PoppinsBold',
        },
        h3: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            fontFamily: 'PoppinsMedium',
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 'bold',
            fontFamily: 'PoppinsMedium',
        },
        caption: {
            fontSize: '1rem',
            fontWeight: 'normal',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                ${fontFace}
            `,
        },
    },
});

export default theme;
