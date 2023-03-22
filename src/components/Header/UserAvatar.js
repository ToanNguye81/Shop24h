import { Avatar, Box, MenuItem, Tooltip, IconButton, Typography, Menu, CircularProgress } from "@mui/material";
import { signOut } from "firebase/auth";
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { logoutUser } from "../../actions/signIn.actions";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router';
import Cookies from "js-cookie";
import { onAuthStateChanged } from 'firebase/auth';
import auth from '../../firebase.config';
import { resetUser, setUser } from '../../actions/signIn.actions';
import { checkUser } from '../../actions/order.actions';


const settings = ['Account', 'Dashboard'];

export const UserAvatar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [anchorElUser, setAnchorElUser] = useState(null);
  const { user, loggedUser, loading } = useSelector(reduxData => reduxData.signInReducers)
  const handleLogin = (event) => {
    navigate("/signin")
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        //Check user to get customer information
        await dispatch(setUser(user))
        await Cookies.set("accessToken", user.accessToken)
        await dispatch(checkUser())
      }
      else {
        dispatch(resetUser())
      }
    })
  }, [])

  const handleLogOutUser = () => {
    signOut(auth)
      .then(() => {
        dispatch(logoutUser())
        Cookies.remove("accessToken")
        localStorage.removeItem("firstName","lastName","phone","email","city","country","note","address")
        navigate("/homepage")
      })
      .catch((error) => {
        console.log(error)
      })
    setAnchorElUser(null);
  }



  return (
    <React.Fragment>
      {loading ?
        <CircularProgress />
        :
        <React.Fragment>
          {loggedUser ?
            <Stack>
              <Box sx={{ flexGrow: 0 }} >
                <Tooltip title={user.displayName}>
                  <IconButton onClick={handleOpenUserMenu} size="small">
                    <Avatar alt={user.displayName} src={user.photoURL} />
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
            :
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Loggin">
                <IconButton onClick={handleLogin} sx={{ pl: 1 }}>
                  <AccountCircleIcon sx={{ fontSize: 30, color: "#34495e" }} />
                </IconButton>
              </Tooltip>
            </Box>
          }
        </React.Fragment>
      }
    </React.Fragment>
  )
}