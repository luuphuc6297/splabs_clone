import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Box, Divider, styled, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import React from 'react';

const Name = styled(Typography)(({ theme }) => ({
    marginTop: '10px',
    marginBottom: '4px',
    letterSpacing: '1.3',
    fontSize: 42,
    wordBreak: 'break-word',
}));

const Position = styled(Typography)(({ theme }) => ({}));

const Lists = styled('ul')(({ theme }) => ({
    width: '100%',
    marginRight: 56,
    padding: 0,
}));

const ListItem = styled('li')(({ theme }) => ({
    fontSize: 14,
}));

export const MemberCardV2 = React.memo(
    ({ avatar, name, position, experiences }) => {
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
                        height: 420,
                        display: 'flex',
                        color: '#10131a',
                        justifyContent: 'space-between',
                        backgroundImage: `url('${avatar}')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionX: 'right',
                        padding: '56px 40px',
                        boxSizing: 'border-box',
                        backgroundSize: '70%',
                        backgroundPositionY: 'bottom',
                        position: 'relative',
                        objectFit: 'contain',
                        [theme.breakpoints.up('sm')]: {
                            padding: '80px 60px',
                            backgroundSize: 'contain',
                        },
                    }}
                >
                    <Box
                        sx={{
                            flexBasis: '50%',
                            flexShrink: 0,
                            [theme.breakpoints.up('sm')]: {
                                flexBasis: '40%',
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
                            <TelegramIcon fontSize="large" />
                            <LinkedInIcon fontSize="large" />
                        </Box>
                        {experiences && (
                            <Box sx={{ display: 'flex' }}>
                                <Lists>
                                    {experiences
                                        .slice(0, 5)
                                        .map((experience, index) => (
                                            <ListItem key={index}>
                                                {experience.description}
                                            </ListItem>
                                        ))}
                                </Lists>
                                <Lists>
                                    {experiences
                                        .slice(6)
                                        .map((experience, index) => (
                                            <ListItem key={index}>
                                                {experience.description}
                                            </ListItem>
                                        ))}
                                </Lists>
                            </Box>
                        )}
                    </Box>
                    <Box sx={{ flex: 1 }}></Box>
                </Box>
            </Box>
        );
    }
);
