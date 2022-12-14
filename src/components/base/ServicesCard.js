import { Divider, styled, Typography, useTheme } from '@mui/material';
import { GradientBox } from 'components';
import React from 'react';
const Title = styled(Typography)(({ theme }) => ({
    fontSize: 18,
    marginBottom: 16,
    fontWeight: 'bold',
    [theme.breakpoints.down('lg')]: {
        fontSize: 16,
    },
}));

const Logo = styled('img')(({ theme }) => ({
    width: 64,
    height: 64,
    objectFit: 'contain',
}));

const Caption = styled(Typography)(({ theme }) => ({
    fontSize: 16,
    textAlign: 'center',
    [theme.breakpoints.down('lg')]: {
        fontSize: 14,
    },
}));

export const ServicesCard = React.memo(({ id, title, description, logo }) => {
    const theme = useTheme();
    return (
        <GradientBox
            data-aos="fade-right"
            data-aos-duration="5000"
            data-aos-easing="linear"
            id={id}
            sx={{
                width: 520,
                height: 320,
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                cursor: 'pointer',
                padding: 2,
                background: 'rgba(46, 48, 83, 0.4)',
                boxShadow: 'rgb(255 255 255 / 60%) 0px 0px 8px 0px',
                '&:hover': {
                    background:
                        'linear-gradient(336.08deg, rgb(220, 102, 255) 20.7%, rgb(3, 170, 249) 97.43%)',
                    transition: 'all 0.5s ease 0s',
                    transform: 'translateY(-10px) scale(1.05) !important',
                },
                [theme.breakpoints.down('lg')]: {
                    width: 480,
                    height: 280,
                },
                [theme.breakpoints.down('md')]: {
                    width: 420,
                    height: 240,
                },
            }}
        >
            <Logo src={logo} loading="lazy" />
            <Title variant="h6">{title}</Title>
            <Divider
                sx={{
                    width: '30%',
                    backgroundColor: 'white',
                    opacity: 0.8,
                    marginBottom: 2,
                }}
            />
            <Caption>{description}</Caption>
        </GradientBox>
    );
});
