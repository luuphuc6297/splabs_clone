import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Box, styled, Typography } from '@mui/material';
import { SectionWrapper } from 'components';
import { HiOutlinePhone } from 'react-icons/hi';

import ButtonChangeLanguage from './ButtonChangeLanguage';
import ButtonChangeSocial from './ButtonChangeSocial';

const StyledTopHeader = styled(Box)(({ theme }) => ({
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    zIndex: 9,
}));

const ContactInfoArea = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
}));

const SocialNetworksArea = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    '& > *': {
        marginLeft: 16,
    },
}));

const EmailInfo = styled('a')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    margin: '8px 24px 8px 0',
    textDecoration: 'none',
    color: theme.palette.text.primary,
}));

const Email = styled(Typography)(({ theme }) => ({
    fontSize: 12,
    marginRight: 8,
    cursor: 'pointer',
    textDecoration: 'none',
    color: theme.palette.text.primary,
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
}));

const EmailIcon = styled(EmailOutlinedIcon)(({ theme }) => ({
    width: 24,
    height: 24,
    marginRight: 4,
    [theme.breakpoints.down('sm')]: {
        marginRight: 16,
    },
}));

const PhoneInfo = styled('a')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    margin: '8px 0',
    textDecoration: 'none',
    color: theme.palette.text.primary,
}));

const Phone = styled(Typography)(({ theme }) => ({
    fontSize: 12,
    cursor: 'pointer',
    textDecoration: 'none',
    color: theme.palette.text.primary,
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
}));

const PhoneIcon = styled(HiOutlinePhone)(({ theme }) => ({
    width: 22,
    height: 22,
    marginRight: 4,
}));

export const TopHeader = () => {
    return (
        <StyledTopHeader>
            <SectionWrapper
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <ContactInfoArea>
                    {/* Email */}
                    <EmailInfo href="mailto:contact@splabs.info">
                        <EmailIcon />
                        <Email>contact@splabs.info</Email>
                    </EmailInfo>
                    {/* Phone */}
                    {/* <PhoneInfo href="tel:+987 8762 866 82">
                        <PhoneIcon />
                        <Phone>+987 8762 866 82</Phone>
                    </PhoneInfo> */}
                </ContactInfoArea>
                <SocialNetworksArea>
                    <Box>
                        <ButtonChangeSocial />
                    </Box>

                    <Box>
                        <ButtonChangeLanguage />
                    </Box>
                </SocialNetworksArea>
            </SectionWrapper>
        </StyledTopHeader>
    );
};
