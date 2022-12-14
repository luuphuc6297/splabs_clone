import { Box } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
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
  gap: 8,
}));

const NavLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text['primary'],
  textDecoration: 'none',
}));

export const NavigateBar = React.memo(() => {
  const renderNavigateItems = React.useCallback(() => {
    return navigateItems.map((item) => (
      <NavLink
        key={item.id}
        id={item.id}
        to={item.link}
        onClick={() => scrollSection(item.id)}
      >
        {item.label}
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
    </Navbar>
  );
});
