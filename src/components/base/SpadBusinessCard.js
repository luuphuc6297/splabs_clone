import { styled, Typography } from '@mui/material';
import { GradientBox } from 'components';
import React from 'react';

const Title = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'PoppinsBold',
}));

const Logo = styled('img')(({ theme }) => ({
    width: 64,
    height: 64,
    objectFit: 'contain',
}));
const Lists = styled('ul')(({ theme }) => ({}));

const ListItem = styled('li')(({ theme }) => ({
    fontSize: 14,
}));

export const SpadBusinessCard = React.memo(({ title, lists, logo }) => {
    return (
        <GradientBox
            data-aos="fade-right"
            data-aos-duration="5000"
            data-aos-easing="linear"
            sx={{
                height: 360,
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
            }}
        >
            <Logo src={logo} loading="lazy" />
            <Title variant="h6">{title}</Title>
            <Lists>
                {lists.map((list, index) => (
                    <ListItem key={index}>{list.caption}</ListItem>
                ))}
            </Lists>
        </GradientBox>
    );
});
