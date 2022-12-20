import { Box, styled, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';

const ImageWrapper = styled(Box)(({ theme }) => ({
    maxHeight: 268,
    maxWidth: 268,
    borderRadius: '16px',
    display: 'flex',
    margin: '0 auto',
    overflow: 'hidden',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',
}));

const Avatar = styled('img')(() => ({
    objectFit: 'cover',
    width: '100%',
    height: '100%',
}));

const Name = styled(Typography)(() => ({
    marginTop: 8,
    marginBottom: 8,
    fontSize: 14,
    fontWeight: 'bold',
}));

const Caption = styled(Typography)(() => ({
    fontSize: 12,
}));

export const ProjectItemCard = React.memo(
    ({ logo, title, description, link }) => {
        return (
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                style={{ color: grey[50], textDecoration: 'none' }}
            >
                <Box
                    sx={{
                        backgroundPosition: 'center',
                        '&:hover': {
                            transition: 'all 0.5s ease 0s',
                            transform: 'scale(1.01) !important',
                        },
                    }}
                >
                    <ImageWrapper>
                        <Avatar src={logo} loading="lazy" />
                    </ImageWrapper>

                    <Box>
                        <Name align="center">{title}</Name>
                        <Caption
                            align="center"
                            color="#8B8B8B"
                            variant="subtitle2"
                        >
                            {description}
                        </Caption>
                    </Box>
                </Box>
            </a>
        );
    }
);
