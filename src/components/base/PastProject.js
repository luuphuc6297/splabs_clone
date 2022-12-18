import { Box, Divider, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { BsTelegram } from 'react-icons/bs';
import { useMobile } from 'hooks/useMobile';

const LogoWrapper = styled(Box)(({ theme }) => ({
    width: 480,
    height: 344,
    borderRadius: 8,
    border: '1px solid #f5f5f5',
    overflow: 'hidden',
    boxSizing: 'border-box',
    display: 'flex',
}));

const Logo = styled('img')(({ theme }) => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
}));

const InfoWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
}));

const Name = styled(Typography)(({ theme }) => ({
    textAlign: 'left',
    fontFamily: 'PoppinsBold',
    fontSize: 24,
    marginTop: 8,
}));

const Description = styled(Typography)(({ theme }) => ({
    fontSize: 14,
    textAlign: 'left',
    marginTop: 12,
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
    width: 80,
    height: 80,
}));

export const PastProject = ({ logo, name, description, community, qr }) => {
    const isMobile = useMobile();

    return (
        <Box
            sx={{
                padding: 3,
                border: '1px solid #f5f5f5',
                borderRadius: '16px',
                height: isMobile ? 460 : 360,
                display: 'flex',
                alignItems: 'center',
                flexDirection: isMobile ? 'column' : 'initial',
                gap: 2,
            }}
        >
            <LogoWrapper
                sx={{ width: isMobile ? '100%' : 480 }}
                className="ádasdasdasdasd"
            >
                <Logo src={logo} loading="lazy" />
            </LogoWrapper>

            <InfoWrapper className="dasdasdasdasd">
                <Typography
                    sx={{
                        marginBottom: 1,
                        textAlign: 'left',
                        fontSize: 18,
                    }}
                >
                    Past Project
                </Typography>
                <Divider
                    sx={{
                        width: '12%',
                        padding: '1px',
                        borderColor: '#ffffff',
                        background: '#ffffff',
                        borderRadius: '4px',
                    }}
                />
                <Name>{name}</Name>
                <Description>{description}</Description>
                <Box>
                    <Grid
                        container
                        rowSpacing={{ xs: 2 }}
                        columnSpacing={{ xs: 2 }}
                    >
                        <Grid
                            item
                            xs={6}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <TelegramIcon />
                            <CommunityInfo>Group/ 12.5 members</CommunityInfo>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <TelegramIcon />
                            <CommunityInfo>Group/ 12.5 members</CommunityInfo>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <TelegramIcon />
                            <CommunityInfo>Group/ 12.5 members</CommunityInfo>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <TelegramIcon />
                            <CommunityInfo>Group/ 12.5 members</CommunityInfo>
                        </Grid>
                    </Grid>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'end',
                    }}
                >
                    <QrBox
                        sx={{
                            width: isMobile ? 50 : 80,
                            height: isMobile ? 50 : 80,
                        }}
                        src={qr}
                    />
                </Box>
            </InfoWrapper>
        </Box>
    );
};
