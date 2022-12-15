import { Box } from '@mui/material';
import {
    AddressCard,
    SectionTitle,
    SectionWrapper,
    SectionWrapperFullWidth,
    QRCard,
} from 'components';
import React from 'react';
import address from './address.json';
import qrs from './qr.json';

export const Explore = () => {
    const renderQRCard = React.useCallback(() => {
        return qrs.payload.map(({ id, title, qr }) => (
            <QRCard id={id} title={title} qr={qr} />
        ));
    }, []);

    const renderAddressCards = React.useCallback(() => {
        return address.payload.map(({ id, office, address }) => (
            <AddressCard id={id} office={office} address={address} />
        ));
    }, []);

    return (
        <SectionWrapperFullWidth
            sx={{
                backgroundImage: `url('/images/background/info_section.png')`,
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
                        gap: 21,
                    }}
                >
                    {renderQRCard()}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 8,
                    }}
                >
                    {renderAddressCards()}
                </Box>
            </SectionWrapper>
        </SectionWrapperFullWidth>
    );
};
