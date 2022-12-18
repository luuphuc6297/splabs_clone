import { Box } from '@mui/material';
import { styled } from '@mui/system';
import './style.scss';

const options = {
    shouldForwardProp: (prop) => prop !== 'gradientColors',
};

const RoundGradientButton = styled(
    Box,
    options
)(({ theme, gradientColors }) => ({
    position: 'relative',
    border: '1px solid transparent',
    backgroundClip: 'padding-box',
    borderRadius: 16,

    '&:after': {
        position: 'absolute',
        top: -5,
        left: -5,
        right: -5,
        bottom: -5,
        background: `linear-gradient(to left, ${gradientColors.join(',')})`,
        content: '""',
        zIndex: -1,
        borderRadius: 16,
    },
}));

export const GradientBorderBox = ({ children, ...props }) => {
    return (
        <RoundGradientButton gradientColors={['blue', 'purple']} {...props}>
            {children}
        </RoundGradientButton>
    );
};
