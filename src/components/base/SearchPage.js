import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Stack, styled, TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

const CustomModal = styled(Modal)(({ theme }) => ({
    '.MuiBackdrop-root': {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
}));

const StyleTextField = styled(TextField)(({ theme }) => ({
    '.MuiOutlinedInput-notchedOutline': {
        borderColor: '#ffffff',
    },
    '.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#ffffff !important',
    },
}));

export const SearchPage = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <SearchIcon onClick={handleOpen} />
            <CustomModal disableAutoFocus open={open} onClose={handleClose}>
                <Box sx={style}>
                    <Stack spacing={2} sx={{ width: 400 }}>
                        <StyleTextField
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Search here"
                            InputLabelProps={{ shrink: false }}
                            InputProps={{
                                startAdornment: <SearchIcon />,
                                disableUnderline: true,
                            }}
                        />
                    </Stack>
                </Box>
            </CustomModal>
        </>
    );
};
