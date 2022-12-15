import { Box } from '@mui/material';
import { SectionWrapper, SPLabsLogo } from 'components';
import React from 'react';
import { NavigateBar } from './NavigateBar';

export const Header = () => {
    const [scrollPositionToggle, setScrollPositionToggle] =
        React.useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position > 75) {
            setScrollPositionToggle(true);
        } else {
            setScrollPositionToggle(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener('scrollSection', handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener('scrollSection', handleScroll);
        };
    }, []);

    return (
        <Box sx={{ paddingTop: 8 }}>
            <SectionWrapper
                id="header"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <SPLabsLogo />
                <NavigateBar />
            </SectionWrapper>
        </Box>
    );
};
