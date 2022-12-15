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
export const QRCard = React.memo(({ qr, title }) => {
    return (
        <CardActionArea component="div" disableRipple disableTouchRipple>
            <CardMedia
                component="img"
                height="110"
                image="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"
                alt="green iguana"
            />
            <CardContent sx={{ padding: '0px 4px', marginTop: 1 }}>
                <Title gutterBottom variant="subtitle1" component="p">
                    {title}
                </Title>
            </CardContent>
        </CardActionArea>
    );
});
