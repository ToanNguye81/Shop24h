import { Avatar, Box, MenuItem, Tooltip, IconButton, Typography, Menu } from "@mui/material";
import { signOut } from "firebase/auth";
import auth from "../../firebase.config";
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { successLogOut } from "../../actions/signIn.actions";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router';


const settings = ['Profile', 'Account', 'Dashboard'];

export const UserAvatar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [anchorElUser, setAnchorElUser] = useState(null);
  const { photoURL, userName } = useSelector((reduxData) => reduxData.signInReducers);

  // const handleLogin = (event) => {
  //   navigate("/login")
  // };
  const handleLogin = (event) => {
    navigate("/signin")
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOutUser = () => {
    signOut(auth)
      .then(() => {
        dispatch(successLogOut())
        console.log("handleLogOutUser")
      })
      .catch((error) => {
        console.log(error)
      })

    setAnchorElUser(null);
  }

  return (
    <>
      {photoURL === null ?
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Loggin">
            <IconButton onClick={handleLogin} sx={{ pl: 1 }}>
              <AccountCircleIcon sx={{ fontSize: 30, color: "#34495e" }} />
            </IconButton>
          </Tooltip>
        </Box>
        :
        <Stack>
           <Box sx={{ flexGrow: 0 }} >
             <Tooltip title={userName}>
               <IconButton onClick={handleOpenUserMenu} size="small">
               <Avatar alt={userName} src={photoURL} />
               </IconButton>
             </Tooltip>
             <Menu
               sx={{ mt: '45px' }}
               id="menu-appbar"
               anchorEl={anchorElUser}
               anchorOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
               }}
               keepMounted
               transformOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
               }}
               open={Boolean(anchorElUser)}
               onClose={handleCloseUserMenu}
             >
               {settings.map((setting) => (
                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
                   <Typography textAlign="center">{setting}</Typography>
                 </MenuItem>
               ))}
               <MenuItem key={"logout"} onClick={handleLogOutUser}>
                 <Typography textAlign="center">Logout</Typography>
               </MenuItem>
             </Menu>
           </Box>
        </Stack>
      }
    </>
  )
}