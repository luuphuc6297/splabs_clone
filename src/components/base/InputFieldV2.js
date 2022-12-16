import { Box, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomInput = styled(TextField)(({ theme }) => ({
    '.MuiOutlinedInput-root': {},
    '.MuiOutlinedInput-input': {
        background: '#ffffff',
        textAlign: 'center',
        borderRadius: '30px',
        color: '#65686f',
        padding: '0 24px',
        height: '60px',
    },
    '.MuiOutlinedInput-notchedOutline': {
        border: 0,
        outline: 0,
    },
}));

export function InputFieldV2({ error, ...props }) {
    return (
        <Box sx={{ position: 'relative' }}>
            <CustomInput
                variant="outlined"
                InputLabelProps={{ shrink: false }}
                fullWidth
                {...props}
            />
            {error?.message && (
                <Typography
                    sx={{
                        position: 'absolute',
                        bottom: -24,
                        left: 30,
                        fontSize: 14,
                        color: '#DD4558',
                        transition: 'all 0.3',
                    }}
                >
                    {error.message}
                </Typography>
            )}
        </Box>
    );
}
