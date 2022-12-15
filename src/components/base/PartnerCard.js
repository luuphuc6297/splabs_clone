import { Box } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const Logo = styled('img')(({ theme }) => ({
  width: 64,
  height: 64,
}));

export const PartnerCard = React.memo(({ partnerLogo }) => {
  return (
    <Box
      sx={{
        border: '0.5px solid',
        borderRadius: 2,
        width: 128,
        height: 80,
        padding: 1,
        textAlign: 'center',
      }}
    >
      <Logo src={partnerLogo} />
    </Box>
  );
});
