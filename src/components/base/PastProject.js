import { Box, Divider, Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/system';
import { BsTelegram } from 'react-icons/bs';

const PassProjectWrapper = styled(Grid)(({ theme }) => ({
    width: '95%',
    display: 'flex',
    padding: 16,
    border: '1px solid #f5f5f5',
    borderRadius: 16,
    margin: 0,
}));

const LogoWrapper = styled(Box)(({ theme }) => ({
    width: 268,
    height: 268,
    borderRadius: 8,
    border: '1px solid #f5f5f5',
}));

const Logo = styled('img')(({ theme }) => ({}));

const InfoWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
}));

const Name = styled(Typography)(({ theme }) => ({
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
}));

const Description = styled(Typography)(({ theme }) => ({
    fontWeight: 'normal',
    fontSize: 14,
    textAlign: 'left',
    marginBottom: 24,
}));

const CommunityWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 14,
    marginBottom: 24,
}));

const TelegramIcon = styled(BsTelegram)(({ theme }) => ({
    width: 24,
    height: 24,
    marginRight: 8,
}));

const CommunityInfo = styled(Typography)(({ theme }) => ({
    fontSize: 14,
    textAlign: 'left',
    fontWeight: 'normal',
}));

const QrBox = styled('img')(({ theme }) => ({
    width: 56,
    height: 56,
}));

export const PastProject = ({ logo, name, description, community, qr }) => {
    return (
        <PassProjectWrapper container spacing={2}>
            <Grid item xs={4} sm={5}>
                <LogoWrapper>
                    <Logo src={logo} loading="lazy" />
                </LogoWrapper>
            </Grid>
            <Grid item xs={8} sm={6}>
                <InfoWrapper>
                    <Typography sx={{ marginBottom: 1, textAlign: 'left' }}>
                        Past Project
                    </Typography>
                    <Divider
                        sx={{
                            width: '12%',
                            marginBottom: 1,
                            color: grey[50],
                        }}
                    />
                    <Name>{name}</Name>
                    <Description>{description}</Description>
                    <CommunityWrapper>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'start',
                                flexDirection: 'column',
                            }}
                        >
                            <Box sx={{ display: 'flex', marginBottom: 1 }}>
                                <TelegramIcon />
                                <CommunityInfo>
                                    Group/ 12.5 members
                                </CommunityInfo>
                            </Box>
                            <Box sx={{ display: 'flex' }}>
                                <TelegramIcon />
                                <CommunityInfo>
                                    Group/ 12.5 members
                                </CommunityInfo>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'start',
                                flexDirection: 'column',
                            }}
                        >
                            <Box sx={{ display: 'flex', marginBottom: 1 }}>
                                <TelegramIcon />
                                <CommunityInfo>
                                    Group/ 12.5 members
                                </CommunityInfo>
                            </Box>
                            <Box sx={{ display: 'flex' }}>
                                <TelegramIcon />
                                <CommunityInfo>
                                    Group/ 12.5 members
                                </CommunityInfo>
                            </Box>
                        </Box>
                    </CommunityWrapper>
                    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                        <QrBox src={qr} />
                    </Box>
                </InfoWrapper>
            </Grid>
        </PassProjectWrapper>
    );
};
