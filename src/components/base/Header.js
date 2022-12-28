import { Box, Drawer, styled } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SectionWrapper, SPLabsLogo } from 'components';
import { IconArrowLeftSvg } from 'components/Svgs/IconArrowLeftSvg';
import { IconGridSvg } from 'components/Svgs/IconGridSvg';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Link as LinkReactScroll } from 'react-scroll';
import { NavigateBar } from './NavigateBar';
import SubMenu from './SubMenu';

const navigateItems = [
    { id: 'home', label: 'home', link: '/' },
    { id: 'about_us', label: 'about_us', link: '/#about-us', internal: true },
    {
        id: 'the_studio',
        label: 'the_studio',
        link: '/vision',
        internal: false,
        subMenu: [
            // {
            //     id: 'the_studio',
            //     label: 'Vision',
            //     link: '/vision',
            // },
            // {
            //     id: 'advertisement',
            //     label: 'Advertisement',
            //     link: '/vision#advertisement',
            // },
            // {
            //     id: 'service',
            //     label: 'Service',
            //     link: '/vision#services_process',
            // },
            // {
            //     id: 'the_studio',
            //     label: 'The Team',
            //     link: '/#the-team',
            // },
        ],
    },
    {
        id: 'influencer marketing',
        label: 'Influencer Marketing',
        link: '/process',
        internal: false,
        subMenu: [
            // {
            //     id: 'influencer_process',
            //     label: 'SPAD Influencer Process',
            //     link: '/process#influencer_process', // after # is id element
            // },
            // {
            //     id: 'spad_usiness',
            //     label: 'SPAD Business',
            //     link: '/process#influencer_marketing', // after # is id element
            // },
        ],
    },
    {
        id: 'partners',
        label: 'partners',
        link: '/#sp-partners',
        internal: true,
    },
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
    const { pathname } = useLocation();

    const dataNavigateItems = useMemo(() => {
        return navigateItems.map((item) => {
            if (item.subMenu?.length > 0 && item.link === pathname) {
                item.internal = true;
            }
            item.internal = false;
            return item;
        });
    }, [pathname]);

    const { t } = useTranslation('translation');

    const [scrollPositionToggle, setScrollPositionToggle] =
        React.useState(false);

    const [openDrawerMenu, setOpenDrawerMenu] = React.useState(false);

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
                <Link to="/">
                    <SPLabsLogo />
                </Link>
                {matchesMD ? (
                    <NavigateBar navigateItems={dataNavigateItems} />
                ) : (
                    <IconGridSvg onClick={() => setOpenDrawerMenu(true)} />
                )}
                <Drawer
                    anchor="right"
                    open={openDrawerMenu}
                    variant="temporary"
                    onClose={() => setOpenDrawerMenu(false)}
                    PaperProps={{ sx: { width: matchesXS ? '100%' : 320 } }}
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
                            {dataNavigateItems.map((item) => {
                                if (item?.subMenu?.length > 0) {
                                    return (
                                        <SubMenu
                                            subMenu={item.subMenu}
                                            titleMenu={t(item.label)}
                                            isMobile
                                            internal={item.internal}
                                            onCloseMobile={() =>
                                                setOpenDrawerMenu(false)
                                            }
                                        />
                                    );
                                }

                                return (
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
                                );
                            })}
                        </Box>
                    </Box>
                </Drawer>
            </SectionWrapper>
        </Box>
    );
};
