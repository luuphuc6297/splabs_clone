import { Box } from '@mui/material';
import { styled } from '@mui/system';
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
                    boxShadow: '0px 0px 13px 0px rgba(25,192,255,1)',
                    borderRadius: 4,
                    height: 100,
                    padding: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #19c0ff',
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
