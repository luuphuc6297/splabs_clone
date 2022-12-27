import { styled, Typography } from '@mui/material';
import { LeftToRightGradientBox } from 'components';
import React from 'react';
import { Divider } from '@mui/material';

const Title = styled(Typography)(({ theme }) => ({
    marginBottom: 16,
    fontWeight: 'bold',
}));

const Logo = styled('img')(({ theme }) => ({
    objectFit: 'contain',
}));

const Caption = styled(Typography)(({ theme }) => ({
    fontSize: 12,
    textAlign: 'center',
}));

export const VisionCard = React.memo(({ id, title, caption, logo }) => {
    console.log('id', id === 'business-statement');
    return (
        <LeftToRightGradientBox
            data-aos="fade-right"
            data-aos-duration="5000"
            data-aos-easing="linear"
            id={id}
            sx={{
                width: 240,
                height: 400,
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
                transform: `${
                    id === 'business-statement'
                        ? 'translateY(48px) !important'
                        : 'translateZ(0)'
                }`,
                '&:hover': {
                    background:
                        'linear-gradient(336.08deg, rgb(220, 102, 255) 20.7%, rgb(3, 170, 249) 97.43%)',
                    transition: 'all 0.5s ease 0s',
                    transform: `${
                        id === 'business-statement'
                            ? 'translateY(38px) scale(1.05) !important'
                            : 'translateY(-10px) scale(1.05) !important'
                    }`,
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
            <Caption>{caption}</Caption>
        </LeftToRightGradientBox>
    );
});
