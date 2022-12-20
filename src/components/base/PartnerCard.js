import { styled } from '@mui/material';
import { GradientBox } from 'components';
import React from 'react';

const Logo = styled('img')(({ theme }) => ({
    width: 108,
    height: 64,
    objectFit: 'contain',
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
