import { Box } from '@mui/material';
import { styled } from '@mui/material';
import { TransparentButton } from 'components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { scrollSection } from 'utils';
import { Link as LinkReactScroll } from 'react-scroll';
import { SearchPage } from './SearchPage';
import SubMenu from './SubMenu';
import { grey } from '@mui/material/colors';
const Navbar = styled(Box)(() => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gridGap: 8,
    gap: 24,
}));

const NavItem = styled(Box)(() => ({
    color: '#ffffff',
    textDecoration: 'none',
    transition: 'all 0.5s',
    '&:hover': {
        color: 'rgb(159, 140, 204)',
        transform: 'scale(1.05) !important',
    },
    cursor: 'pointer',
}));

export const NavigateBar = ({ navigateItems }) => {
    const { t } = useTranslation('translation');

    return (
        <Navbar sx={{ justifyContent: 'end' }}>
            {navigateItems.map((item) => {
                if (item?.subMenu?.length > 0) {
                    return (
                        <SubMenu
                            subMenu={item.subMenu}
                            titleMenu={t(item.label)}
                            internal={item.internal}
                        />
                    );
                }

                return (
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
                                style={{
                                    color: '#ffffff',
                                    textDecoration: 'none',
                                    transition: 'all 0.5s',
                                    '&:hover': {
                                        color: 'rgb(159, 140, 204)',
                                        transform: 'scale(1.05) !important',
                                    },
                                    cursor: 'pointer',
                                }}
                            >
                                {t(item.label)}
                            </Link>
                        )}
                    </NavItem>
                );
            })}

            <TransparentButton onClick={() => scrollSection('#start-growing')}>
                <a
                    href="https://forms.gle/W2nuZixZv8a7uoD27"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        fontSize: 14,
                        fontFamily: 'PoppinsBold',
                        fontWeight: 'bold',
                        color: grey[50],
                        textDecoration: 'none',
                    }}
                >
                    Apply
                </a>
            </TransparentButton>
            <SearchPage />
        </Navbar>
    );
};
