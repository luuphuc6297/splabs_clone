import { styled } from '@mui/system';
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
