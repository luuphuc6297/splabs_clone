import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { SectionWrapper } from 'components';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';

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
  padding: '12px 0',
}));

const SocialNetworksArea = styled(Box)(({ theme }) => ({}));

const EmailInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const Email = styled('a')(({ theme }) => ({
  fontSize: 12,
  marginRight: 8,
}));

const EmailIcon = styled(EmailOutlinedIcon)(({ theme }) => ({
  width: 24,
  height: 24,
  marginRight: 4,
}));

const PhoneInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const Phone = styled('a')(({ theme }) => ({
  fontSize: 12,
}));

const PhoneIcon = styled(PhoneOutlinedIcon)(({ theme }) => ({
  width: 24,
  height: 24,
  marginRight: 4,
}));

const FaceBookIcon = styled(AiOutlineFacebook)(({ theme }) => ({
  width: 24,
  height: 24,
  marginRight: 16,
}));

const InstagramIcon = styled(AiOutlineInstagram)(({ theme }) => ({
  width: 24,
  height: 24,
  marginRight: 24,
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
          <EmailInfo>
            <EmailIcon />
            <Email>info@webmail.com</Email>
          </EmailInfo>
          {/* Phone */}
          <PhoneInfo>
            <PhoneIcon />
            <Phone>+987 8762 866 82</Phone>
          </PhoneInfo>
        </ContactInfoArea>
        <SocialNetworksArea>
          <FaceBookIcon />
          <InstagramIcon />
        </SocialNetworksArea>
      </SectionWrapper>
    </StyledTopHeader>
  );
};
