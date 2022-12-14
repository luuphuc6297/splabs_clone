import { Box, Divider, Grid, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material';
import { BsTelegram } from 'react-icons/bs';
import { useMobile } from 'hooks/useMobile';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
const LogoWrapper = styled(Box)(({ theme }) => ({
    minWidth: 312,
    height: 344,
    borderRadius: 16,
    overflow: 'hidden',
    boxSizing: 'border-box',
    display: 'flex',
    border: '0.5px solid #f5f5f5',
    [theme.breakpoints.down('868')]: {
        height: '100%',
        width: '60%',
        alignItems: 'start',
    },
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

const TwitterIcon = styled(AiFillTwitterCircle)(({ theme }) => ({
    width: 26,
    height: 26,
    marginRight: 8,
}));

const DiscordIcon = styled(FaDiscord)(({ theme }) => ({
    width: 24,
    height: 24,
    marginRight: 8,
}));

const FacebookIcon = styled(BsFacebook)(({ theme }) => ({
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

export const PastProject = ({
    logo,
    name,
    description,
    community,
    qr,
    status,
}) => {
    const isMobile = useMobile();
    const theme = useTheme();

    const renderCommunityItem = (item) => {
        switch (item.icon) {
            case 'telegram':
                return (
                    <Grid
                        item
                        xs={6}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TelegramIcon />
                        <CommunityInfo>{item.content}</CommunityInfo>
                    </Grid>
                );
            case 'twitter':
                return (
                    <Grid
                        item
                        xs={6}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TwitterIcon />
                        <CommunityInfo>{item.content}</CommunityInfo>
                    </Grid>
                );
            case 'discord':
                return (
                    <Grid
                        item
                        xs={6}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <DiscordIcon />
                        <CommunityInfo>{item.content}</CommunityInfo>
                    </Grid>
                );
            case 'facebook':
                return (
                    <Grid
                        item
                        xs={6}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <FacebookIcon />
                        <CommunityInfo>{item.content}</CommunityInfo>
                    </Grid>
                );
            default:
                break;
        }
    };

    return (
        <Box
            sx={{
                padding: 3,
                border: '1px solid #f5f5f5',
                borderRadius: '16px',
                height: isMobile ? 460 : 344,
                display: 'flex',
                alignItems: 'center',
                flexDirection: isMobile ? 'column' : 'initial',
                gap: 2,
                [theme.breakpoints.down('868')]: {
                    flexDirection: 'column',
                    height: '100%',
                },
            }}
        >
            <LogoWrapper>
                <Logo src={logo} loading="lazy" />
            </LogoWrapper>

            <InfoWrapper>
                <Typography
                    sx={{
                        marginBottom: 1,
                        textAlign: 'left',
                        fontSize: 18,
                    }}
                >
                    {status}
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
                        {community.map((item) => (
                            <>{renderCommunityItem(item)}</>
                        ))}
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
