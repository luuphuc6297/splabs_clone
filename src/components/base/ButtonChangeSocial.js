import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import * as React from 'react';
import {
    AiFillTwitterSquare,
    AiOutlineFacebook,
    AiOutlineLinkedin,
} from 'react-icons/ai';
import { TbBrandTelegram } from 'react-icons/tb';
import { StyledMenu } from './ButtonChangeLanguage';

const LIST_SOCIAL_SUPPORT = [
    {
        name: 'Twitter',
        link: 'https://twitter.com/SPLabsInfo',
        icon: <AiFillTwitterSquare size={24} />,
    },
    {
        name: 'Telegram',
        link: 'https://t.me/SPLabs_channel',
        icon: <TbBrandTelegram size={24} />,
    },
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/SPLabs.info',
        icon: <AiOutlineFacebook size={24} />,
    },
    {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/company/splabsheadquater/about/',
        icon: <AiOutlineLinkedin size={24} />,
    },
];

export const StyleButtonChangeSocial = styled(Button)(() => ({
    background: 'none',
    textTransform: 'capitalize',
    '&:hover': {
        background: 'none',
    },
}));

export default function ButtonChangeSocial() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const currentIndex = 0;
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClickItem = (index) => {
        const { link } = LIST_SOCIAL_SUPPORT[index];
        window.open(link, '_blank');
        setAnchorEl(null);
    };

    return (
        <div>
            <StyleButtonChangeSocial
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                <Box
                    sx={{
                        display: 'flex',
                        gap: '10px',
                        height: '30px',
                        alignItems: 'center',
                    }}
                >
                    {LIST_SOCIAL_SUPPORT[currentIndex].icon}
                    {/* {LIST_SOCIAL_SUPPORT[currentIndex].name} */}
                </Box>
            </StyleButtonChangeSocial>
            <StyledMenu
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {LIST_SOCIAL_SUPPORT.filter(
                    (_, idx) => idx !== currentIndex
                ).map(({ icon, name }, index) => {
                    return (
                        <MenuItem
                            key={index}
                            vc
                            onClick={() => handleClickItem(index)}
                            disableRipple
                            sx={{
                                minWidth: 'auto',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '10px',
                                    height: '30px',
                                    alignItems: 'center',
                                }}
                            >
                                {icon}
                                {/* {name} */}
                            </Box>
                        </MenuItem>
                    );
                })}
            </StyledMenu>
        </div>
    );
}
