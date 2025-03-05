import { navItems } from '@/config/constants'
import { AppBar, Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import AdbIcon from '@mui/icons-material/Adb';

interface Props {
    window?: () => Window;
  }

function Navbar({ window }: Props) {
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    
    
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', paddingX: '20px', alignItems: 'center'}}>
                <Typography variant="h6" sx={{ my: 2 }}>
                    <AdbIcon/>
                </Typography>
                <CloseIcon sx={{cursor: "pointer"}}/>
            </Box>
            <Divider />
            <List>
                {navItems.map((item) => (
                <ListItem key={item.route} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText primary={item.label} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </Box>
    );
    const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box  sx={{display: 'flex', height:'10vh'}}>
        <CssBaseline />
        <AppBar sx={{height: '10vh', backgroundColor: '#141414', color:  '#fff', display: 'flex', justifyContent: 'center'}} component="nav">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    <AdbIcon/>
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                    <Button  key={item.route} sx={{ color: '#fff' }}>
                        {item.label}
                    </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
        <Box component={'nav'}>
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '80%' },
                }}
                >
                {drawer}
            </Drawer>
        </Box>
    </Box>
  )
}

export default Navbar