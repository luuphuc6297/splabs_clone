import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { TransparentButton } from 'components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { scrollSection } from 'utils';
import { Link as LinkReactScroll } from 'react-scroll';

const navigateItems = [
    { id: 'home', label: 'home', link: '/' },
    { id: 'about_us', label: 'about_us', link: '/#about-us', internal: true },
    { id: 'the_studio', label: 'the_studio', link: '/#the-studio' },
    { id: 'influencer', label: 'influencer', link: '/#influencer' },
    { id: 'marketing', label: 'marketing', link: '/#marketing' },
    { id: 'partners', label: 'partners', link: '/#partners', internal: true },
];

const Navbar = styled(Box)(() => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gridGap: 8,
    gap: 24,
    fontWeight: 'bold',
}));

const NavItem = styled(Box)(() => ({
    color: 'grey[50]',
    textDecoration: 'none',
    transition: 'all 0.5s ease 0s',
    '&:hover': {
        color: 'rgb(159, 140, 204)',
        transform: 'scale(1.025) !important',
    },
    cursor: 'pointer',
}));

export const NavigateBar = React.memo(() => {
    const { t } = useTranslation('translation');

    return (
        <Navbar
            sx={{
                justifyContent: 'end',
            }}
        >
            {navigateItems.map((item) => (
                <NavItem key={item.id}>
                    {item.internal ? (
                        <LinkReactScroll
                            to={item.id}
                            smooth
                            delay={0}
                            duration={500}
                        >
                            {t(item.label)}
                        </LinkReactScroll>
                    ) : (
                        <Link
                            id={item.id}
                            to={item.link}
                            onClick={() => scrollSection(item.id)}
                            style={{
                                color: 'grey[50]',
                                textDecoration: 'none',
                                transition: 'all 0.5s ease 0s',
                                '&:hover': {
                                    color: 'rgb(159, 140, 204)',
                                    transform: 'scale(1.025) !important',
                                },
                                cursor: 'pointer',
                            }}
                        >
                            {t(item.label)}
                        </Link>
                    )}
                </NavItem>
            ))}
            <TransparentButton>Apply</TransparentButton>
        </Navbar>
    );
});
