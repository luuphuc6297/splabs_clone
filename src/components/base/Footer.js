import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material';
import {
    SectionTitle,
    SectionWrapper,
    SectionWrapperFullWidth,
    SPLabsLogo,
} from 'components';
import { useMobile } from 'hooks/useMobile';
import {
    AiFillTwitterSquare,
    AiOutlineFacebook,
    AiOutlineInstagram,
} from 'react-icons/ai';

const FaceBookIcon = styled(AiOutlineFacebook)(({ theme }) => ({
    width: 24,
    height: 24,
    color: 'white',
}));

const InstagramIcon = styled(AiOutlineInstagram)(({ theme }) => ({
    width: 24,
    height: 24,
    color: 'white',
}));

const TwitterIcon = styled(AiFillTwitterSquare)(({ theme }) => ({
    width: 24,
    height: 24,
    color: 'white',
}));

const Services = styled('a')(({ theme }) => ({
    fontSize: 12,
    marginRight: 8,
    cursor: 'pointer',
    textDecoration: 'none',
    color: grey[500],
    '&:hover': {
        color: grey[400],
    },
}));

const Email = styled('a')(({ theme }) => ({
    fontSize: 12,
    marginRight: 8,
    cursor: 'pointer',
    textDecoration: 'none',
    color: grey[500],
    '&:hover': {
        textDecoration: 'underline',
        color: grey[400],
    },
}));

const SocialLink = styled('a')(({ theme }) => ({
    color: theme.palette.text.primary,
    textDecoration: 'none',
    cursor: 'pointer',
}));
export const Footer = () => {
    const isMobile = useMobile();

    return (
        <SectionWrapperFullWidth id="contact_us" sx={{ background: '#262626' }}>
            <SectionWrapper sx={{ background: '#262626', display: 'flex' }}>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 5,
                        width: '100%',
                        paddingTop: isMobile ? 3 : 6,
                        paddingBottom: 6,
                        flexWrap: 'wrap',
                    }}
                >
                    <Grid container>
                        <Grid item md={6} xs={12}>
                            <Box
                                sx={{
                                    maxWidth: '60%',
                                }}
                            >
                                <SPLabsLogo />
                                <Box sx={{ marginBottom: 2, marginTop: 3 }}>
                                    <Typography
                                        color="white"
                                        variant="subtitle2"
                                        gutterBottom
                                    >
                                        SPlabs has built up various games and
                                        applications on WEB3 and is a company
                                        that strives to enable various projects
                                        around the world to float with
                                        blockchain through the experience
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid sx={{ display: 'flex' }} item md={6} xs={12}>
                            <Box
                                sx={{
                                    flexBasis: isMobile ? '1' : '0',
                                    flexGrow: 1,
                                }}
                            >
                                <Box>
                                    <SectionTitle
                                        sx={{
                                            fontWeight: 600,
                                        }}
                                        color="white"
                                        variant="subtitle1"
                                        gutterBottom
                                    >
                                        Service
                                    </SectionTitle>
                                    <List
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 1,
                                        }}
                                    >
                                        <ListItem disablePadding>
                                            <Services
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Apply for Incubation
                                            </Services>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <Services>
                                                Global Marketing
                                            </Services>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <Services>Development</Services>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <Services>IDO/INO/Listing</Services>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    flexBasis: isMobile ? '1' : '0',
                                    flexGrow: 1,
                                }}
                            >
                                <Box>
                                    <SectionTitle
                                        sx={{
                                            fontWeight: 600,
                                        }}
                                        color="white"
                                        variant="subtitle1"
                                        gutterBottom
                                    >
                                        Info
                                    </SectionTitle>
                                    <List
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 1,
                                        }}
                                    >
                                        <ListItem disablePadding>
                                            <Email
                                                target="_blank"
                                                rel="noreferrer"
                                                href="mailto:info@splabs.info"
                                            >
                                                About Splabs
                                            </Email>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <Email
                                                target="_blank"
                                                rel="noreferrer"
                                                href="mailto:contact@splabs.info276"
                                            >
                                                Media Kit
                                            </Email>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <Email
                                                target="_blank"
                                                rel="noreferrer"
                                                href="mailto:koreacontact@splabs.info"
                                            >
                                                News
                                            </Email>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <Email
                                                target="_blank"
                                                rel="noreferrer"
                                                href="mailto:koreacontact@splabs.info"
                                            >
                                                FAQ
                                            </Email>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    flexBasis: isMobile ? '1' : '0',
                                    flexGrow: 1,
                                }}
                            >
                                <Box>
                                    <SectionTitle
                                        sx={{
                                            fontWeight: 600,
                                        }}
                                        color="white"
                                        variant="subtitle1"
                                        gutterBottom
                                    >
                                        Contact Us
                                    </SectionTitle>
                                    <List
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 1,
                                        }}
                                    >
                                        <ListItem disablePadding>
                                            <Email
                                                target="_blank"
                                                rel="noreferrer"
                                                href="mailto:info@splabs.info"
                                            >
                                                info@splabs.info
                                            </Email>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <Email
                                                target="_blank"
                                                rel="noreferrer"
                                                href="mailto:contact@splabs.info276"
                                            >
                                                contact@splabs.info276
                                            </Email>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <Email
                                                target="_blank"
                                                rel="noreferrer"
                                                href="mailto:koreacontact@splabs.info"
                                            >
                                                koreacontact@splabs.info
                                            </Email>
                                        </ListItem>
                                    </List>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            gap: 1,
                                        }}
                                    >
                                        <SocialLink
                                            href="https://www.facebook.com/SPLabs.info"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FaceBookIcon />
                                        </SocialLink>
                                        <SocialLink
                                            href="https://t.me/SPLabs_channel"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <InstagramIcon />
                                        </SocialLink>
                                        <SocialLink
                                            href="https://twitter.com/SPLabs_info"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <TwitterIcon />
                                        </SocialLink>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </SectionWrapper>
        </SectionWrapperFullWidth>
    );
};
