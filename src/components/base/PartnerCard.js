import { styled } from '@mui/material';
import { GradientBox } from 'components';
import React from 'react';

const Logo = styled('img')(({ theme }) => ({
    width: 168,
    height: 72,
    objectFit: 'contain',
    [theme.breakpoints.down('480')]: {
        width: 80,
        height: 64,
    },
}));

export const PartnerCard = React.memo(({ partnerLogo, hrefPartner }) => {
    
    return (
        <a href={hrefPartner} target="_blank" rel="noreferrer">
            <GradientBox
                sx={{
                    borderRadius: 4,
                    height: 108,
                    padding: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: 'rgb(255 255 255 / 60%) 0px 0px 8px 0px',
                    transition: 'transform 300ms ease-in-out 0s',
                    '&:hover': {
                        transform: 'scale(1.05) !important',
                    },
                }}
            >
                <Logo src={partnerLogo} loading="lazy" />
            </GradientBox>
        </a>
    );
});
