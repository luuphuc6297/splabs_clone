import { useTheme } from '@mui/material/styles';
import { styled, Typography } from '@mui/material';
import { LeftToRightGradientBox } from 'components';
import React from 'react';

const Caption = styled(Typography)(({ theme }) => ({
    fontSize: 18,
    textAlign: 'left',
}));

export const AdvertisementCard = React.memo(({ id, caption }) => {
    const theme = useTheme();

    return (
        <LeftToRightGradientBox
            data-aos="fade-right"
            data-aos-duration="5000"
            data-aos-easing="linear"
            id={id}
            sx={{
                width: 620,
                height: 200,
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                cursor: 'pointer',
                padding: 3,
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
                },
                [theme.breakpoints.down('md')]: {
                    width: '100%',
                },
            }}
        >
            <Caption>{caption}</Caption>
        </LeftToRightGradientBox>
    );
});
