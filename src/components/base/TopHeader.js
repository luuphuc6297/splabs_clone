import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { SectionWrapper } from 'components';

import {
    AiFillTwitterSquare,
    AiOutlineFacebook,
    AiOutlineInstagram
} from 'react-icons/ai';
import ButtonChangeLanguage from './ButtonChangeLanguage';

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
    margin: '8px 0',
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

const PhoneIcon = styled(PhoneOutlinedIcon)(({ theme }) => ({
    width: 24,
    height: 24,
    marginRight: 4,
}));

const SocialLink = styled('a')(({ theme }) => ({
    color: theme.palette.text.primary,
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'flex',
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
                    <EmailInfo href="mailto:info@splabs.info">
                        <EmailIcon />
                        <Email>info@splabs.info</Email>
                    </EmailInfo>
                    {/* Phone */}
                    <PhoneInfo href="tel:+987 8762 866 82">
                        <PhoneIcon />
                        <Phone>+987 8762 866 82</Phone>
                    </PhoneInfo>
                </ContactInfoArea>
                <SocialNetworksArea>
                    <Box>
                        <SocialLink
                            href="https://www.facebook.com/SPLabs.info"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AiOutlineFacebook size={24} />
                        </SocialLink>
                    </Box>
                    <Box>
                        <SocialLink
                            href="https://t.me/SPLabs_channel"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AiOutlineInstagram size={24} />
                        </SocialLink>
                    </Box>

                    <Box>
                        <SocialLink
                            href="https://twitter.com/SPLabs_info"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AiFillTwitterSquare size={24} />
                        </SocialLink>
                    </Box>

                    <Box>
                        <ButtonChangeLanguage />
                    </Box>
                </SocialNetworksArea>
            </SectionWrapper>
        </StyledTopHeader>
    );
};
