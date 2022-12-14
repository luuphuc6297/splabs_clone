import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Box, Divider, styled, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import React from 'react';

const Name = styled(Typography)(({ theme }) => ({
    marginTop: '10px',
    marginBottom: '4px',
    letterSpacing: '1.3',
    fontSize: 36,
    wordBreak: 'break-word',
}));

const Position = styled(Typography)(({ theme }) => ({}));

const Lists = styled('ul')(({ theme }) => ({
    width: '72%',
    marginRight: 16,
    padding: 0,
    [theme.breakpoints.down('sm')]: {
        marginRight: 0,
    },
}));

const ListsSecond = styled('ul')(({ theme }) => ({
    width: '80%',
    marginRight: 80,
    padding: 0,
    [theme.breakpoints.down('sm')]: {
        marginRight: 0,
    },
}));

const ListItem = styled('li')(({ theme }) => ({
    lineHeight: 1.5,
    fontSize: 14,
}));

export const MemberCardV2 = React.memo(
    ({ avatar, name, position, experiences, linkedin }) => {
        const theme = useTheme();
        return (
            <Box
                className="member-card_item"
                sx={{
                    background: '#f0f5f9',
                    borderRadius: '12px',
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        maxWidth: 848,
                        height: 420,
                        color: '#10131a',
                        justifyContent: 'space-between',
                        padding: '25px 30px',
                        backgroundImage: `none`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionX: 'right',
                        boxSizing: 'border-box',
                        backgroundPositionY: '88px',
                        objectFit: 'contain',
                        margin: 'auto',

                        backgroundSize: '348px !important',
                        [theme.breakpoints.up('sm')]: {
                            backgroundImage: `url('${avatar}')`,
                            padding: '60px',
                            backgroundSize: 'contain',
                            backgroundPositionY: 'bottom',
                            display: 'flex',
                        },
                        [theme.breakpoints.down('1080')]: {
                            backgroundSize: '280px !important',
                        },
                        [theme.breakpoints.down('sm')]: {
                            height: experiences ? 800 : 560,
                            display: 'flex',
                            flexDirection: 'column',
                            paddingBottom: '0px',
                        },
                    }}
                >
                    <Box
                        sx={{
                            flexShrink: 0,
                            [theme.breakpoints.up('sm')]: {
                                flexBasis: '80%',
                            },
                        }}
                    >
                        <Position variant="h6">{position}</Position>
                        <Name variant="h3">{name}</Name>
                        <Divider
                            sx={{
                                maxWidth: 50,
                                borderWidth: 1.5,
                                mt: 2,
                                mb: 2,
                                borderColor: 'initial',
                            }}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 3,
                            }}
                        >
                            <a
                                href={linkedin}
                                target="_blank"
                                rel="noreferrer"
                                style={{ cursor: 'pointer', color: 'inherit' }}
                            >
                                <TelegramIcon
                                    color="inherit"
                                    fontSize="large"
                                />
                            </a>

                            <a
                                href={linkedin}
                                target="_blank"
                                rel="noreferrer"
                                style={{ cursor: 'pointer', color: 'inherit' }}
                            >
                                <LinkedInIcon
                                    color="inherit"
                                    fontSize="large"
                                />
                            </a>
                        </Box>
                        {experiences && (
                            <Box sx={{ display: 'flex' }}>
                                <Lists>
                                    {experiences
                                        .slice(0, 6)
                                        .map((experience, index) => (
                                            <ListItem key={index}>
                                                {experience.description}
                                            </ListItem>
                                        ))}
                                </Lists>
                                {experiences.length > 7 && (
                                    <ListsSecond>
                                        {experiences
                                            .slice(7)
                                            .map((experience, index) => (
                                                <ListItem key={index}>
                                                    {experience.description}
                                                </ListItem>
                                            ))}
                                    </ListsSecond>
                                )}
                            </Box>
                        )}
                    </Box>
                    <Box
                        sx={{
                            flex: 1,
                            '> img': {
                                width: '100%',
                                height: '100%',
                            },
                            [theme.breakpoints.up('sm')]: {
                                '> img': {
                                    display: 'none',
                                },
                            },
                        }}
                    >
                        <img src={avatar} alt="avatar" />
                    </Box>
                </Box>
            </Box>
        );
    }
);
