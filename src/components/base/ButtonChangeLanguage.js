import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { alpha, styled } from '@mui/material/styles';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { getLanguage } from 'utils';

const LIST_LANGUAGE_SUPPORT = {
    vi: { name: 'VietNam', code: 'vi', icon: <EditIcon /> },
    en: { name: 'English', code: 'en', icon: <EditIcon /> },
};

export const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        background:
            'linear-gradient(336.08deg, rgb(220, 102, 255) 20.7%, rgb(3, 170, 249) 97.43%)',
        color:
            theme.palette.mode === 'light'
                ? 'rgb(255, 255, 255)'
                : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
    },
}));

export const StyleButtonChangeLanguage = styled(Button)(() => ({
    background: 'none',
    textTransform: 'capitalize',
    '&:hover': {
        background: 'none',
    },
}));

export default function ButtonChangeLanguage() {
    const { i18n } = useTranslation();
    const currentLanguage = getLanguage();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeLanguageHandler = (lang) => {
        console.log('codeLanguage', lang);
        i18n.changeLanguage(lang);
        setAnchorEl(null);
    };

    if (!currentLanguage) {
        return;
    }

    const currentLang = currentLanguage;

    return (
        <div>
            <StyleButtonChangeLanguage
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                {LIST_LANGUAGE_SUPPORT[currentLang].name}
            </StyleButtonChangeLanguage>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {Object.values(LIST_LANGUAGE_SUPPORT).map(
                    ({ code, icon, name }, index) => {
                        if (code === currentLang) {
                            return false;
                        }

                        return (
                            <MenuItem
                                key={index}
                                vc
                                onClick={() => changeLanguageHandler(code)}
                                disableRipple
                            >
                                {name}
                                {/* {icon} */}
                            </MenuItem>
                        );
                    }
                )}
            </StyledMenu>
        </div>
    );
}
