import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const Office = styled(Typography)(({ theme }) => ({
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
}));

const Address = styled(Typography)(({ theme }) => ({
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'normal',
    color: 'white',
}));

export const AddressCard = React.memo(({ office, address }) => {
    return (
        <Box
            sx={{
                padding: 4,
                borderRadius: 4,
                border: '1px solid white',
            }}
        >
            <Office>{office}</Office>
            <Address>{address}</Address>
        </Box>
    );
});
