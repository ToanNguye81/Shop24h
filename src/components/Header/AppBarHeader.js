import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import Logo from "../../assets/images/Logo.png"

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { UserAvatar } from './UserAvatar';


const pages = ['NIKE', 'ADIDAS','JORDAN','YEEZY','OTHER BRANDS','SALE','BLOG','ABOUT','CONTACT'];


export const AppBarHeader = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    
    
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static" sx={{ backgroundColor: "#FFFFFF" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box backgroundColor="black" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                        <img className='shoelogo' src={Logo} width="120" alt="logo" ></img>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            ml: 5, mr: 5, pr: 0,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: "black",
                            textDecoration: 'none',
                        }}
                    >
                        MIUSHOP
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="black"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' }
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography   textAlign="center" sx={{ color: "black",fontFamily: 'Sarabun'}}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box backgroundColor="black" sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                        <img src={Logo} width="70" alt="logo" />
                    </Box >
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Sarabun',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        MIUSHOP
                    </Typography>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Notification">
                            <IconButton sx={{ pl:1 }}>
                            <NotificationsIcon   sx={{ fontSize: 30, color: "#34495e" }}/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Your's Cart">
                            <IconButton sx={{ pl:1 }}>
                            <AddShoppingCartIcon  sx={{ fontSize: 30 ,color: "#34495e" }}/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <UserAvatar/>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
