import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const Title = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
}));

const Logo = styled('img')(({ theme }) => ({
    color: 'black',
}));
const Lists = styled('ul')(({ theme }) => ({}));
const ListItem = styled('li')(({ theme }) => ({}));

export const CategoryCard = React.memo(({ title, lists, logo }) => {
    return (
        <Box
            sx={{
                width: 348,
                height: 348,
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: `url('/images/border/make_different_card.png')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                padding: 2,
            }}
        >
            <Logo src={logo} />
            <Title variant="h6">{title}</Title>
            <Lists>
                {lists.map((list, index) => (
                    <ListItem key={index}>{list.caption}</ListItem>
                ))}
            </Lists>
        </Box>
    );
});
