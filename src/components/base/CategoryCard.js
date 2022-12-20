import { Box, styled, Typography } from '@mui/material';
import React from 'react';

const Title = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
}));

const Logo = styled('img')(({ theme }) => ({
    objectFit: 'contain',
}));
const Lists = styled('ul')(({ theme }) => ({}));
const ListItem = styled('li')(({ theme }) => ({
    fontSize: 14,
}));

export const CategoryCard = React.memo(({ title, lists, logo }) => {
    return (
        <Box
            data-aos="fade-right"
            data-aos-duration="5000"
            data-aos-easing="linear"
            sx={{
                height: 355,
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgb(152, 202, 254)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                cursor: 'pointer',
                padding: 2,
                background: 'rgba(46, 48, 83, 0.4)',
                boxShadow: 'rgb(0 0 0 / 34%) 0px 1px 9px',
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
        </Box>
    );
});
