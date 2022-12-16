import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/system';

const SubmitBtn = styled(LoadingButton)({
    cursor: 'pointer',
    '&.MuiButton-root': {
        fontSize: 20,
        fontFamily: 'PoppinsBold',
        height: 60,
        borderRadius: 30,
        color: '#ffffff',
        backgroundColor: '#19c0ff',
    },
});

export const SubmitButton = ({ children, loading, ...props }) => {
    return (
        <SubmitBtn
            type="submit"
            variant="contained"
            fullWidth
            loading={loading}
            {...props}
        >
            {children}
        </SubmitBtn>
    );
};
