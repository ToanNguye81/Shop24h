import * as React from 'react';
import { useEffect } from 'react';
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
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CartIcon from './CartIcon';


const pages = [
    { label: 'HOME', link: "homepage" },
    { label: 'SHOP', link: "products" },
    { label: 'BLOG', link: "blog" },
    { label: 'ABOUT', link: "about" },
    { label: 'CONTACT', link: "contact" },
]


export const AppBarHeader = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleClickPage = (link) => {
        setAnchorElNav(null);
        navigate(`/${link}`)
    }

    const onBtnMiushopClick = () => {
        navigate("/homepage")
    }

    const onBtnCartClick = () => {
        navigate("/orders")
    }


    return (
        <Box pt={{ xs: 7, sm: 8, md: 13 }}>
            <AppBar position="fixed" sx={{ backgroundColor: "#FFFFFF" }} variant="none">
                <Container maxWidth="xl" >
                    <Toolbar disableGutters >
                        <Box component="button" onClick={onBtnMiushopClick} backgroundColor="black" sx={{ display: { xs: 'none', sm: "none", md: 'flex' }, mr: 1 }}>
                            <img className='shoelogo' src={Logo} width="120" alt="logo" ></img>
                        </Box>
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
                                {pages.map((page, index) => (
                                    <MenuItem key={index}
                                        onClick={() => handleClickPage(page.link)}
                                    >
                                        <Typography textAlign="center" sx={{ color: "black", fontFamily: 'Poppins' }}>{page.label}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: "none", md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page.label}
                                    onClick={() => handleClickPage(page.link)}
                                    sx={{ my: 2, color: 'black', display: 'block' }}
                                >
                                    <strong>{page.label}</strong>
                                </Button>
                            ))}
                        </Box>
                        <Typography
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', sm: "center", md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'Poppins',
                                fontWeight: 700,
                                letterSpacing: '.2rem',
                                color: 'black',
                                textDecoration: 'none',
                            }}
                        >
                            <Box
                                backgroundColor="black" sx={{ display: { xs: 'flex', sm: "center", md: 'center' }, mr: 1 }}>
                                <IconButton onClick={onBtnMiushopClick}>
                                    <img src={Logo} width="70" alt="logo" />
                                </IconButton>
                            </Box >
                        </Typography>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Notification">
                                <IconButton sx={{ pl: 1 }}>
                                    <NotificationsIcon sx={{ fontSize: 30, color: "#34495e" }} />
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <CartIcon />
                        <UserAvatar />
                    </Toolbar>
                </Container>
            </AppBar>
        </Box >
    );
}
