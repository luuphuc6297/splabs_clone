import { Box, List, ListItem, Typography } from '@mui/material';
import { styled } from '@mui/system';
import {
    SectionTitle,
    SectionWrapper,
    SectionWrapperFullWidth,
    SPLabsLogo,
} from 'components';
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

export const Footer = () => {
    return (
        <SectionWrapperFullWidth sx={{ background: '#262626' }}>
            <SectionWrapper sx={{ background: '#262626', display: 'flex' }}>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 5,
                        width: '100%',
                        paddingTop: 6,
                        paddingBottom: 6,
                    }}
                >
                    <Box sx={{ flex: '1' }}>
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

                    <Box sx={{ flex: '1' }}>
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
                                    <Typography
                                        sx={{
                                            margin: 0,
                                        }}
                                        color="white"
                                        variant="subtitle2"
                                        gutterBottom
                                    >
                                        Lorem Ipsum
                                    </Typography>
                                </ListItem>
                                <ListItem disablePadding>
                                    <Typography
                                        sx={{
                                            margin: 0,
                                        }}
                                        color="white"
                                        variant="subtitle2"
                                        gutterBottom
                                    >
                                        Lorem Ipsum
                                    </Typography>
                                </ListItem>
                                <ListItem disablePadding>
                                    <Typography
                                        sx={{
                                            margin: 0,
                                        }}
                                        color="white"
                                        variant="subtitle2"
                                        gutterBottom
                                    >
                                        Lorem Ipsum
                                    </Typography>
                                </ListItem>
                            </List>
                        </Box>
                    </Box>

                    <Box sx={{ flex: '1' }}>
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
                                    <Typography
                                        sx={{
                                            margin: 0,
                                        }}
                                        color="white"
                                        variant="subtitle2"
                                        gutterBottom
                                    >
                                        Lorem Ipsum
                                    </Typography>
                                </ListItem>
                                <ListItem disablePadding>
                                    <Typography
                                        sx={{
                                            margin: 0,
                                        }}
                                        color="white"
                                        variant="subtitle2"
                                        gutterBottom
                                    >
                                        Lorem Ipsum
                                    </Typography>
                                </ListItem>
                                <ListItem disablePadding>
                                    <Typography
                                        sx={{
                                            margin: 0,
                                        }}
                                        color="white"
                                        variant="subtitle2"
                                        gutterBottom
                                    >
                                        Lorem Ipsum
                                    </Typography>
                                </ListItem>
                            </List>
                        </Box>
                        <Box></Box>
                    </Box>
                </Box>
            </SectionWrapper>
        </SectionWrapperFullWidth>
    );
};
