import { styled, Typography } from '@mui/material';
import { GradientBox } from 'components';
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
        <GradientBox
            sx={{
                boxShadow: 'rgb(255 255 255 / 60%) 0px 0px 15px 0px',
                padding: '32px 24px',
                height: '100%',
            }}
        >
            <Office>{office}</Office>
            <Address>{address}</Address>
        </GradientBox>
    );
});
