import {
    ArrowBackIcon,
    Box,
    Divider,
    Drawer,
    DrawerBox,
    Hidden,
    IconButton,
    List,
} from '@mui/material';
export const RightDrawer = ({ isTablet, showSidebar, handleClose }) => {
    return (
        <Drawer open={showSidebar} anchor="right" onClose={handleClose}>
            <DrawerBox
                sx={{
                    width: isTablet ? 300 : 300,
                }}
            >
                <Box
                    sx={{
                        marginTop: '1rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <IconButton
                        aria-label="CLose menu list"
                        onClick={handleClose}
                    >
                        <ArrowBackIcon />
                    </IconButton>

                    {/* <Languages sx={{ '& span': { color: '#637381' } }} /> */}
                </Box>
                <List>
                    <Hidden lgUp>
                        <Divider />
                        {/* {config.map((item, index) => {
                            if (item.link.indexOf('#') <= -1) {
                                return (
                                    <Link
                                        to={item.link}
                                        style={{
                                            textDecoration: 'none',
                                            color: '#212b36',
                                        }}
                                        key={index}
                                        className={item.customStyle || ''}
                                    >
                                        <ListItemButton
                                            onClick={() => {
                                                handleClose();
                                            }}
                                            key={index}
                                        >
                                            <ListItemText>
                                                {library[item.label]}
                                                {item.icon}
                                            </ListItemText>
                                        </ListItemButton>
                                    </Link>
                                );
                            }
                        })} */}
                    </Hidden>
                    <Divider />

                    {/* {subMenus.map((menu, index) => (
                        <SubMenu menu={menu} key={index} library={library} />
                    ))} */}
                    <Divider />
                </List>
            </DrawerBox>
        </Drawer>
    );
};
