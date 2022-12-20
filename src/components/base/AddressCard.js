import { Box, styled, Typography } from '@mui/material';
import React from 'react';

const Office = styled(Typography)(({ theme }) => ({
    textAlign: 'left',
    fontSize: 18,
    fontFamily: 'PoppinsBold',
    color: 'white',
    marginBottom: 4,
}));

const Address = styled(Typography)(({ theme }) => ({
    textAlign: 'left',
    fontSize: 14,
    fontFamily: 'PoppinsMedium',
    color: 'white',
}));

export const AddressCard = React.memo(({ office, address }) => {
    return (
        <Box
            sx={{
                padding: '32px 24px',
                borderRadius: 4,
                border: '1px solid white',
                height: '100%',
            }}
        >
            <Office>{office}</Office>
            <Address>{address}</Address>
        </Box>
    );
});
