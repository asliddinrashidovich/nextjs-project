import { navItems } from '@/config/constants'
import { AppBar, Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface Props {
    window?: () => Window;
  }

function Navbar({ window }: Props) {
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const router = useRouter()

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    
    
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', paddingX: '20px', alignItems: 'center'}}>
                <Typography variant="h6"  onClick={() => router.push('/')} sx={{ my: 2, cursor:'pointer'}}>
                    <Image src={'https://static-00.iconduck.com/assets.00/nextjs-icon-1024x1024-5et230l7.png'} alt='header logo' width={30} height={30}/>
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
    <Box  sx={{display: 'flex', }}>
        <CssBaseline />
        <AppBar sx={{ backgroundColor: '#141414', color:  '#fff', display: 'flex', justifyContent: 'center'}} component="nav">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon sx={{cursor: 'pointer'}}/>
                </IconButton>
                <Typography onClick={() => router.push('/')}
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } , alignItems: 'center', gap:'10px', cursor: 'pointer'}}
                >
                    <Image src={'https://static-00.iconduck.com/assets.00/nextjs-icon-1024x1024-5et230l7.png'} alt='header logo' width={30} height={30}/>
                    <Typography variant='h6' sx={{fontWeight: '100', fontFamily: 'fantasy'}}>Next Blogs</Typography>
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                    <Button onClick={() => router.push(item.route)}   key={item.route} sx={{ color: '#fff' }}>
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