import { styled } from '@mui/material';
import { SPLabsLogoImg } from 'assets';

const StyledSPLabsIcon = styled('img')(({ theme }) => ({
    width: 148,
    height: 32,
}));

export const SPLabsLogo = () => {
    return (
        <StyledSPLabsIcon
            alt="splabs-logo"
            src={SPLabsLogoImg}
            loading="lazy"
        />
    );
};
