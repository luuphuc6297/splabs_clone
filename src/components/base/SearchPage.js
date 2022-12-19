import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import { TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    padding: 2,
};

export const SearchPage = () => {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <SearchIcon onClick={handleOpen} />
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <Stack spacing={2} sx={{ width: 300 }}>
                        <TextField
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
            </Modal>
        </>
    );
};
