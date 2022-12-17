import { Box, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

const CustomInput = styled(TextField)(({ theme }) => ({
    '.MuiOutlinedInput-root': {},
    '.MuiOutlinedInput-input': {
        background: '#ffffff',
        textAlign: 'center',
        borderRadius: '30px !important',
        color: '#65686f !important',
        padding: '0 24px',
        height: '60px',
    },
    '.MuiOutlinedInput-notchedOutline': {
        border: 0,
        outline: 0,
    },
}));

export const InputFieldV2 = React.forwardRef(({ error, ...props }, ref) => {
    return (
        <Box sx={{ position: 'relative' }}>
            <CustomInput
                variant="outlined"
                InputLabelProps={{ shrink: false }}
                fullWidth
                ref={ref}
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
});
