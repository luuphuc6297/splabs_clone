import { styled, Typography } from '@mui/material';
import { GradientBox } from 'components';
import React from 'react';

const Name = styled(Typography)(({ theme }) => ({
    textAlign: 'left',
    fontWeight: 'bold',
    width: '80%',
    fontSize: 18,
    marginBottom: 4,
}));

const Position = styled(Typography)(({ theme }) => ({
    textAlign: 'left',
    width: '80%',
}));
const Lists = styled('ul')(({ theme }) => ({}));

const ListItem = styled('li')(({ theme }) => ({
    marginBottom: 4,
    fontSize: 14,
}));

export const TheOurTeamCard = React.memo(({ name, position, descriptions }) => {
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
                justifyContent: 'start',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                cursor: 'pointer',
                padding: '16px 8px',
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
            <Name variant="h6">{name}</Name>
            <Position>{position}</Position>
            <Lists>
                {descriptions.map((item, index) => (
                    <ListItem key={index}>{item.description}</ListItem>
                ))}
            </Lists>
        </GradientBox>
    );
});
