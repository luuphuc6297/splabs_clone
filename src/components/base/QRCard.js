import {
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const Title = styled(Typography)(({ theme }) => ({
    color: 'white',
}));
export const QRCard = React.memo(({ id, qr, title }) => {
    return (
        <CardActionArea
            component="div"
            disableRipple
            disableTouchRipple
            sx={{ width: 'unset', margin: 4 }}
        >
            <CardMedia
                component="img"
                image={qr}
                alt={id}
                sx={{ width: 168, height: 168 }}
            />
            <CardContent sx={{ padding: '0px 4px', marginTop: 1 }}>
                <Title
                    gutterBottom
                    variant="subtitle1"
                    component="p"
                    sx={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 18,
                    }}
                >
                    {title}
                </Title>
            </CardContent>
        </CardActionArea>
    );
});
