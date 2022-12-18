import { Box, Drawer } from '@mui/material';
import { SectionWrapper, SPLabsLogo } from 'components';
import React, { useState, useEffect } from 'react';
import { NavigateBar } from './NavigateBar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { IconGridSvg } from 'components/Svgs/IconGridSvg';
import { IconArrowLeftSvg } from 'components/Svgs/IconArrowLeftSvg';
import { Link as LinkReactScroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/system';

export const ABOUT_US_UID = 'about_us';
export const PARTNERS_UID = 'partners';

const navigateItems = [
    { id: 'home', label: 'home', link: '/' },
    { id: 'about_us', label: 'about_us', link: '/#about-us', internal: true },
    { id: 'the_studio', label: 'the_studio', link: '/#the-studio' },
    { id: 'influencer', label: 'influencer', link: '/#influencer' },
    { id: 'marketing', label: 'marketing', link: '/#marketing' },
    { id: 'partners', label: 'partners', link: '/#partners', internal: true },
];

const MenuItem = styled(Box)(() => ({
    color: '#65686f',
    textDecoration: 'none',
    transition: 'all 0.5s',
    '&:hover': {
        color: 'rgb(159, 140, 204)',
        transform: 'scale(1.05) !important',
    },
    cursor: 'pointer',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
}));

export const Header = () => {
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.up('md'));
    const matchesXS = useMediaQuery(theme.breakpoints.up('xs'));

    const { t } = useTranslation('translation');

    const [scrollPositionToggle, setScrollPositionToggle] = useState(false);
    const [openDrawerMenu, setOpenDrawerMenu] = useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position > 75) {
            setScrollPositionToggle(true);
        } else {
            setScrollPositionToggle(false);
        }
    };

    useEffect(() => {
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
                {matchesMD ? (
                    <NavigateBar navigateItems={navigateItems} />
                ) : (
                    <IconGridSvg onClick={() => setOpenDrawerMenu(true)} />
                )}
                <Drawer
                    anchor="right"
                    open={openDrawerMenu}
                    variant="temporary"
                    onClose={() => setOpenDrawerMenu(false)}
                    PaperProps={{ sx: { width: matchesXS ? '100%' : 300 } }}
                >
                    <Box>
                        <Box
                            sx={{
                                height: 64,
                                borderBottom: '1px solid #dadada',
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0 16px',
                            }}
                        >
                            <IconArrowLeftSvg
                                onClick={() => setOpenDrawerMenu(false)}
                            />
                        </Box>
                        <Box>
                            {navigateItems.map((item) => (
                                <MenuItem key={item.id}>
                                    {item.internal ? (
                                        <LinkReactScroll
                                            to={item.id}
                                            smooth
                                            delay={0}
                                            duration={500}
                                            onClick={() =>
                                                setOpenDrawerMenu(false)
                                            }
                                        >
                                            {t(item.label)}
                                        </LinkReactScroll>
                                    ) : (
                                        <Link
                                            id={item.id}
                                            to={item.link}
                                            style={{
                                                color: '#65686f',
                                                textDecoration: 'none',
                                                transition: 'all 0.5s',
                                                '&:hover': {
                                                    color: 'rgb(159, 140, 204)',
                                                    transform:
                                                        'scale(1.05) !important',
                                                },
                                                cursor: 'pointer',
                                            }}
                                            onClick={() =>
                                                setOpenDrawerMenu(false)
                                            }
                                        >
                                            {t(item.label)}
                                        </Link>
                                    )}
                                </MenuItem>
                            ))}
                        </Box>
                    </Box>
                </Drawer>
            </SectionWrapper>
        </Box>
    );
};
