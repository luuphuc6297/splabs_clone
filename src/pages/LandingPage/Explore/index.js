import { Box, Grid } from '@mui/material';
import {
    AddressCard,
    QRCard,
    SectionTitle,
    SectionWrapper,
    SectionWrapperFullWidth,
} from 'components';
import React from 'react';
import address from './address.json';
import qrs from './qr.json';

export const Explore = () => {
    return (
        <SectionWrapperFullWidth
            sx={{
                backgroundImage: `url('/images/background/info-section.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <SectionWrapper sx={{ padding: '48px 0' }}>
                <SectionTitle
                    sx={{
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        marginBottom: 6,
                    }}
                    variant="h4"
                >
                    Ready to explore Web3 with us?
                </SectionTitle>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    {qrs.payload.map(({ id, title, qr }) => (
                        <QRCard key={id} id={id} title={title} qr={qr} />
                    ))}
                </Box>
                <Grid container spacing={4}>
                    {address.payload.map((add) => (
                        <Grid item xs={12} md={4} key={add.id}>
                            <AddressCard {...add} />
                        </Grid>
                    ))}
                </Grid>
            </SectionWrapper>
        </SectionWrapperFullWidth>
    );
};
