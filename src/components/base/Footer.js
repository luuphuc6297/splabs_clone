import { Box, List, ListItem, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/system';
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

export const Footer = () => {
    const isMobile = useMobile();

    return (
        <SectionWrapperFullWidth sx={{ background: '#262626' }}>
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
                    <Box sx={{ flexBasis: isMobile ? '1' : '0', flexGrow: 1 }}>
                        <SPLabsLogo />

                        <Box sx={{ marginBottom: 2, marginTop: 3 }}>
                            <Typography
                                color="white"
                                variant="subtitle2"
                                gutterBottom
                            >
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's stands.
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 1,
                            }}
                        >
                            <FaceBookIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                        </Box>
                    </Box>

                    <Box sx={{ flexBasis: isMobile ? '1' : '0', flexGrow: 1 }}>
                        <Box>
                            {' '}
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
                                    <Services target="_blank" rel="noreferrer">
                                        Cyber Security
                                    </Services>
                                </ListItem>
                                <ListItem disablePadding>
                                    <Services>IT Consultant</Services>
                                </ListItem>
                                <ListItem disablePadding>
                                    <Services>Strategy & Research</Services>
                                </ListItem>
                            </List>
                        </Box>
                    </Box>

                    <Box sx={{ flexBasis: isMobile ? '1' : '0', flexGrow: 1 }}>
                        <Box>
                            <SectionTitle
                                sx={{
                                    fontWeight: 600,
                                }}
                                color="white"
                                variant="subtitle1"
                                gutterBottom
                            >
                                Contact
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
                        </Box>
                    </Box>
                </Box>
            </SectionWrapper>
        </SectionWrapperFullWidth>
    );
};
