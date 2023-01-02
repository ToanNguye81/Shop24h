import { Avatar, Box, MenuItem, Tooltip, IconButton, Typography, Menu } from "@mui/material";
import Stack from '@mui/material/Stack';
import { useSelector } from "react-redux";
import React, { useState } from "react";

const settings = ['Profile', 'Account', 'Dashboard'];
export const UserAvatar = () => {
  const { photoURL,userName } = useSelector((reduxData) => reduxData.signInReducer);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const hanfleLogOutUser=()=>{

    setAnchorElUser(null);
  }
  return (
    <>
      {photoURL === null ?
        null
        :
        <Stack>
        <Box sx={{ flexGrow: 0 }} >
        <Tooltip title={userName}>
          <IconButton onClick={handleOpenUserMenu} size="small">
            <Avatar alt="avatar" src={photoURL}/>
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
           <MenuItem key={"logout"} onClick={hanfleLogOutUser}>
              <Typography textAlign="center">Logout</Typography>
            </MenuItem>
        </Menu>
      </Box>
      </Stack>


      }
    </>
  )
}