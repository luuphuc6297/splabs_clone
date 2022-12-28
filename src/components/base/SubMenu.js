import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/system';
import { Link as LinkReactScroll } from 'react-scroll';
import {
    Box,
    Collapse,
    Divider,
    List,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const styleTextMenuMobile = {
    color: '#65686f',
    paddingTop: '4px',
    paddingBottom: '4px',
    textDecoration: 'none',
    transition: 'all 0.5s',
    '&:hover': {
        color: 'rgb(159, 140, 204)',
        transform: 'scale(1.05) !important',
        background: 'initial',
    },
    cursor: 'pointer',
};

const StyledGradientBox = styled(Menu)(({ theme }) => ({
    '.MuiList-root': {
        padding: '20px',
    },

    '.MuiPaper-root': {
        background: 'transparent',
        color: 'white',
        borderRadius: '8px',
        '&::before': {
            content: "''",
            position: 'absolute',
            inset: '0px',
            borderRadius: '8px',
            padding: ' 1px',
            background: 'linear-gradient(rgb(3, 170, 249), rgb(220, 102, 255))',
            WebkitMask:
                'linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box content-box, linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)',
            WebkitMaskComposite: 'xor',
        },
    },
}));

const StyledListItemButton = styled(ListItemButton)(
    ({ theme }) => styleTextMenuMobile
);

const StyledListItemText = styled(ListItemText)(
    ({ theme }) => styleTextMenuMobile
);

export default function SubMenu({
    titleMenu,
    subMenu,
    isMobile,
    onCloseMobile,
    internal,
}) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const [openMenuMobile, setOpenMenuMobile] = React.useState(false);
    const { t } = useTranslation('translation');
    const navigate = useNavigate();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        if (isMobile) {
            setOpenMenuMobile((preState) => !preState);
            return;
        }
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        if (isMobile) {
            setOpenMenuMobile(false);
            return;
        }
        setAnchorEl(null);
    };

    return (
        <>
            {isMobile ? (
                <>
                    <StyledListItemButton
                        disableRipple
                        disableTouchRipple
                        onClick={handleClick}
                    >
                        <ListItemText primary={t(titleMenu)} />
                        {openMenuMobile ? <ExpandLess /> : <ExpandMore />}
                    </StyledListItemButton>
                    <Collapse in={openMenuMobile} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {subMenu.map((subItem) => (
                                <StyledListItemText sx={{ pl: 4 }}>
                                    {internal ? (
                                        <LinkReactScroll
                                            onClick={
                                                onCloseMobile && onCloseMobile
                                            }
                                            to={subItem.id}
                                            smooth
                                            delay={0}
                                            duration={500}
                                        >
                                            {t(subItem.label)}
                                        </LinkReactScroll>
                                    ) : (
                                        <ListItemText
                                            onClick={
                                                onCloseMobile && onCloseMobile
                                            }
                                            primary={t(subItem.label)}
                                        />
                                    )}
                                </StyledListItemText>
                            ))}
                        </List>
                    </Collapse>
                </>
            ) : (
                <>
                    <Button
                        disableRipple
                        disableTouchRipple
                        onClick={handleClick}
                        sx={{
                            fontSize: '16px',
                            textTransform: 'initial',
                            color: '#ffffff',
                            textDecoration: 'none',
                            transition: 'all 0.5s',
                            '&:hover': {
                                color: 'rgb(159, 140, 204)',
                                transform: 'scale(1.05) !important',
                            },
                            cursor: 'pointer',
                            padding: 0,
                            fontWeight: 500,
                        }}
                    >
                        {titleMenu}
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </Button>
                    <StyledGradientBox
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        {subMenu.map((subItem, index) => {
                            const hasDivider = subMenu.length - 1 !== index;

                            return (
                                <Box
                                    sx={{ cursor: 'pointer' }}
                                    onClick={handleClose}
                                >
                                    {internal ? (
                                        <LinkReactScroll
                                            onClick={handleClose}
                                            to={subItem.id}
                                            smooth
                                            delay={0}
                                            duration={500}
                                        >
                                            {t(subItem.label)}
                                        </LinkReactScroll>
                                    ) : (
                                        <MenuItem
                                            onClick={() => {
                                                navigate(subItem.link);
                                            }}
                                        >
                                            {t(subItem.label)}
                                        </MenuItem>
                                    )}

                                    {hasDivider && (
                                        <Divider
                                            sx={{
                                                borderColor:
                                                    'rgba(255, 255, 255, .4)',
                                            }}
                                        />
                                    )}
                                </Box>
                            );
                        })}
                    </StyledGradientBox>
                </>
            )}
        </>
    );
}
