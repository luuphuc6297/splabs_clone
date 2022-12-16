import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { TransparentButton } from 'components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { scrollSection } from 'utils';

const navigateItems = [
    { id: 'home', label: 'home', link: '/' },
    { id: 'about_us', label: 'about_us', link: '/#about-us' },
    { id: 'the_studio', label: 'the_studio', link: '/#the-studio' },
    { id: 'influencer', label: 'influencer', link: '/#influencer' },
    { id: 'marketing', label: 'marketing', link: '/#marketing' },
    { id: 'partners', label: 'partners', link: '/#partners' },
];

const Navbar = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gridGap: 8,
    gap: 24,
    fontWeight: 'bold',
}));

const NavLink = styled(Link)(({ theme }) => ({
    color: theme.palette.text['primary'],
    textDecoration: 'none',
    transition: 'all 0.5s ease 0s',
    '&:hover': {
        color: 'rgb(159, 140, 204)',
        transform: 'scale(1.025) !important',
    },
}));

export const NavigateBar = React.memo(() => {
    const { t } = useTranslation('translation');

    const renderNavigateItems = React.useCallback(() => {
        return navigateItems.map((item) => (
            <NavLink
                key={item.id}
                id={item.id}
                to={item.link}
                onClick={() => scrollSection(item.id)}
            >
                {t(item.label)}
            </NavLink>
        ));
    }, []);

    return (
        <Navbar
            sx={{
                justifyContent: 'end',
            }}
        >
            {renderNavigateItems()}
            <TransparentButton>Apply</TransparentButton>
        </Navbar>
    );
});
