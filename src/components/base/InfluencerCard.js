import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';

const AvatarWrapper = styled(Box)(({ theme }) => ({
    borderRadius: '24px',
    display: 'flex',
}));

const Avatar = styled('img')(({ theme }) => ({
    border: '1px solid white',
    borderRadius: 16,
    objectFit: 'cover',
    width: '100%',
    height: '100%',
}));

const Name = styled(Typography)(({ theme }) => ({
    fontSize: 14,
    marginTop: '12px',
    marginBottom: '4px',
}));

const InfoBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

const SocialLink = styled('a')(({ theme }) => ({
    color: 'white',
}));

const Position = styled(Typography)(({ theme }) => ({
    fontFamily: 'PoppinsBold',
    textAlign: 'center',
    fontWeight: 'bold',
}));

export const InfluencerCard = React.memo(
    ({ avatar, name, position, facebook, youtube }) => {
        return (
            <Box
                sx={{
                    '&:hover': {
                        transition: 'all 0.5s ease 0s',
                    },
                }}
            >
                <AvatarWrapper>
                    <Avatar src={avatar} loading="lazy" />
                </AvatarWrapper>
                <InfoBox>
                    <Box sx={{ textAlign: 'left' }}>
                        <Name>{name}</Name>
                        <Position>{position}</Position>
                    </Box>
                    <Box sx={{ display: 'flex', alignContent: 'center' }}>
                        <SocialLink
                            href={facebook}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaFacebookSquare
                                size={22}
                                style={{ marginRight: 8 }}
                            />
                        </SocialLink>
                        <SocialLink
                            href={youtube}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <IoLogoYoutube size={24} />
                        </SocialLink>
                    </Box>
                </InfoBox>
            </Box>
        );
    }
);
