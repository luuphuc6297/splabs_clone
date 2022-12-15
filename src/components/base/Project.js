import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avt3 } from 'assets';
import { ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import { Cloud } from '@mui/icons-material';

export default function MediaControlCard() {
    return (
        <Card sx={{ display: 'flex', background: 'red' }}>
            <Box>
                <Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 200, height: 200 }}
                        image={Avt3}
                        alt="Live from space album cover"
                    />
                </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <CardContent sx={{ padding: 0 }}>
                    <Typography
                        align="left"
                        component="div"
                        variant="subtitle1"
                    >
                        Project
                    </Typography>
                </CardContent>

                <CardContent sx={{ padding: 0 }}>
                    <Typography
                        align="left"
                        component="div"
                        variant="subtitle1"
                    >
                        Project
                    </Typography>
                    <Typography
                        align="left"
                        variant="subtitle2"
                        color="text.secondary"
                        component="div"
                    >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </Typography>
                </CardContent>

                <CardContent sx={{ padding: 0 }}>
                    <MenuList
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '.MuiButtonBase-root': {
                                flexBasis: '50%',
                            },
                            '.MuiButtonBase-root:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                            },
                        }}
                    >
                        <MenuItem>
                            <ListItemIcon>
                                <Cloud fontSize="small" />
                            </ListItemIcon>
                            <ListItemText sx={{ textAlign: 'start' }}>
                                Web Clipboard
                            </ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <Cloud fontSize="small" />
                            </ListItemIcon>
                            <ListItemText sx={{ textAlign: 'start' }}>
                                Web Clipboard
                            </ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <Cloud fontSize="small" />
                            </ListItemIcon>
                            <ListItemText sx={{ textAlign: 'start' }}>
                                Web Clipboard
                            </ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <Cloud fontSize="small" />
                            </ListItemIcon>
                            <ListItemText sx={{ textAlign: 'start' }}>
                                Web Clipboard
                            </ListItemText>
                        </MenuItem>
                    </MenuList>
                </CardContent>

                <CardContent
                    sx={{ padding: 0, display: 'flex', justifyContent: 'end' }}
                >
                    <CardMedia
                        component="img"
                        sx={{ width: 60, height: 60 }}
                        image={Avt3}
                        alt="Live from space album cover"
                    />
                </CardContent>
            </Box>
        </Card>
    );
}
