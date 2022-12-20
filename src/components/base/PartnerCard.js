import { Box, styled } from '@mui/material';
import { partnerBackground } from 'assets';
import React from 'react';
const Logo = styled('img')(({ theme }) => ({
    width: 108,
    height: 64,
    objectFit: 'contain',
}));

export const PartnerCard = React.memo(({ partnerLogo, hrefPartner }) => {
    return (
        <a href={hrefPartner} target="_blank" rel="noreferrer">
            <Box
                sx={{
                    background: `url(${partnerBackground})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    borderRadius: 4,
                    height: 108,
                    padding: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'transform 300ms ease-in-out 0s',
                    '&:hover': {
                        transform: 'scale(1.05) !important',
                    },
                }}
            >
                <Logo src={partnerLogo} loading="lazy" />
            </Box>
        </a>
    );
});
