import { styled } from '@mui/system';
import { Box, Divider, Typography } from '@mui/material';

const PassProjectWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    padding: 16,
}));

const LogoWrapper = styled(Box)(({ theme }) => ({}));

const Logo = styled('img')(({ theme }) => ({}));

const InfoWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
}));

const Name = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
}));

const Description = styled(Typography)(({ theme }) => ({
    fontWeight: 'normal',
    fontSize: 14,
}));

export const PastProject = ({ logo, name, description, community, qr }) => {
    return (
        <PassProjectWrapper>
            <LogoWrapper>
                <Logo src={logo} loading="lazy" />
            </LogoWrapper>
            <InfoWrapper>
                <Typography sx={{ marginBottom: 1 }}>Past Project</Typography>
                <Divider sx={{ width: '12%', marginBottom: 1 }} />
                <Name>{name}</Name>
                <Description>{description}</Description>
            </InfoWrapper>
        </PassProjectWrapper>
    );
};
