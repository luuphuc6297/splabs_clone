import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { theme } from 'configs';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import Router from './routes';

function App() {
    React.useEffect(() => {
        Aos.init({ once: true });
    }, []);

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router />
            </ThemeProvider>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </React.Fragment>
    );
}

export default App;
