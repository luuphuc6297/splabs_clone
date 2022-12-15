import { Box } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const Logo = styled('img')(({ theme }) => ({
    width: 108,
    height: 64,
    objectFit: 'contain',
    transition: 'transform 150ms ease-in-out 0s',
    '&:hover': {
        transform: 'scale(1.05)',
    },
}));

export const PartnerCard = React.memo(({ partnerLogo, hrefPartner }) => {
    return (
        <Box
            sx={{
                borderRadius: 2,
                width: 148,
                height: 80,
                padding: 1,
                textAlign: 'center',
                background: `url('/images/background/partner_background.png')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <a href={hrefPartner} target="_blank" rel="noreferrer">
                <Logo src={partnerLogo} loading="lazy" />
            </a>
        </Box>
    );
});
