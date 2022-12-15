import { Button } from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/system';

const StyledAppButton = styled(Button)(({ theme }) => ({
    width: 128,
    borderRadius: 24,
    textTransform: 'capitalize',
    fontSize: 14,
    fontWeight: 'bold',
    color: grey[50],
    padding: 8,
    marginRight: 8,
    background:
        'linear-gradient(336.08deg, rgb(183, 169, 217) 20.7%, rgb(45, 145, 200) 97.43%)',
}));

export const AppButton = ({ children, ...props }) => {
    return <StyledAppButton {...props}>{children}</StyledAppButton>;
};
