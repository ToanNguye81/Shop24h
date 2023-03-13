// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import auth from "../firebase.config"
// import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
// import { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import { successLogIn } from "../actions/signIn.actions";
// import { useDispatch } from "react-redux";
// const provider = new GoogleAuthProvider();


// const theme = createTheme();

// export default function SignIn() {

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [user, setUser] = useState(null)

//   const loginGoogle = () => {
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         setUser(result.user)
//         console.log(result.user)
//         dispatch(successLogIn(result.user.photoURL, result.user.displayName, result.user.email))
//         // navigate("/homepage")
//         navigate(-1)
//       })
//       .catch((error) => {
//         console.log(error)
//         setUser(null)
//       })
//   }
//   useEffect(() => {
//     onAuthStateChanged(auth, (result) => {
//       if (result) {
//         setUser(result)
//       } else {
//         setUser(null)
//       }
//     })
//   }, [])

//   return (
//     <Box>
//       <ThemeProvider theme={theme}>
//         <Grid container component="main">
//           <CssBaseline />
//           <Grid
//             item
//             xs={false}
//             sm={4}
//             md={7}
//             sx={{
//               backgroundImage: 'url(https://source.unsplash.com/random/?sneaker)',
//               backgroundRepeat: 'no-repeat',
//               backgroundColor: (t) =>
//                 t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }}
//           />
//           <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//             <Box
//               sx={{
//                 my: 8,
//                 mx: 4,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//               }}
//             >
//               <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                 <LockOutlinedIcon />
//               </Avatar>
//               <Typography component="h1" variant="h5">
//                 Sign in
//               </Typography>
//               <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                   autoFocus
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="current-password"
//                 />
//                 <FormControlLabel
//                   control={<Checkbox value="remember" color="primary" />}
//                   label="Remember me"
//                 />
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   sx={{ mt: 3 }}
//                   onClick={loginGoogle}
//                 >
//                   Sign In
//                 </Button>
//                 <h6 className="divider line one-line">Or</h6>
//                 <Button
//                   type="submit"
//                   margin="normal"
//                   fullWidth
//                   variant="contained"
//                   sx={{ mb: 2, bgcolor: "#EA4335" }}
//                   onClick={loginGoogle}
//                 >
//                   SIGN IN USING GOOGLE+
//                 </Button>
//                 <Grid container>
//                   <Grid item xs>
//                     <Link href="#" variant="body2">
//                       Forgot password?
//                     </Link>
//                   </Grid>
//                   <Grid item>
//                     <Link href="/signup" variant="body2">
//                       {"Don't have an account? Sign Up"}
//                     </Link >
//                   </Grid>
//                 </Grid>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </ThemeProvider>
//     </Box>
//   );
// }


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import auth from "../firebase.config"
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { successLogIn } from "../actions/signIn.actions";
import { useDispatch } from "react-redux";
import Cookies from 'js-cookie'
import {guiToken} from "../actions/auth.action"

const provider = new GoogleAuthProvider();

const theme = createTheme();

export default function SignIn() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(null)

  // const loginGoogle = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       setUser(result.user)
  //       console.log(result.user)
  //       console.log(result.user.uid)
  //       console.log(result.user.getIdToken())
  
        
  //       dispatch(successLogIn(result.user.photoURL, result.user.displayName, result.user.email))
  //       // navigate("/homepage")
  //       navigate(-1)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       setUser(null)
  //     })
  // }

  // //Ver 3
  // const loginGoogle = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       const user = result.user
  //       setUser(user)
  //       console.log(user.uid)
  //       console.log(user.accessToken)
  //       // Lưu trữ accessToken vào localStorage
  //       Cookies.set('accessToken', user.accessToken)
  //       dispatch(successLogIn(user.photoURL, user.displayName, user.email))
  //       navigate(-1)
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //       setUser(null)
  //       if (error.code === "auth/popup-closed-by-user") {
  //         alert("Popup window closed before authentication was completed.")
  //       } else {
  //         alert("An error occurred while trying to sign in with Google.")
  //       }
  //     })
  // }


  //VEr 4
  const loginGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      setUser(user)
      console.log(user.uid)
      console.log(user.accessToken)
      // Lưu trữ accessToken vào cookies
      Cookies.set('accessToken', user.accessToken)
      await dispatch(successLogIn(user.photoURL, user.displayName, user.email))
      const response = await fetch('//localhost:8000/auth', {
        method: 'GET',
        credentials: 'include' // Đảm bảo cookies sẽ được gửi kèm theo yêu cầu
      });
      const data = await response.json();
      console.log(data);
      navigate(-1)
    } catch (error) {
      console.error(error)
      setUser(null)
      if (error.code === "auth/popup-closed-by-user") {
        alert("Popup window closed before authentication was completed.")
      } else {
        alert("An error occurred while trying to sign in with Google.")
      }
    }
  }

  // useEffect(() => {
  //   onAuthStateChanged(auth, (result) => {
  //     if (result) {
  //       setUser(result)
  //     } else {
  //       setUser(null)
  //     }
  //   })
    
  // }, [])

  // //Ver 2
  // firebase.auth().onAuthStateChanged(function(user) {
  //   if (user) {
  //     // User is signed in.
  //     var name = user.displayName;
  //     var email = user.email;
  //     var photoUrl = user.photoURL;
  //     var uid = user.uid;
  //     var accessToken = user.getIdToken();
  
  //     // Use the user information and access token to authenticate and access your MongoDB database.
  //     // ...
  //   } else {
  //     // User is signed out.
  //     // ...
  //   }
  // });

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Grid container component="main" >
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random/?sneaker)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3 }}
                  onClick={loginGoogle}
                >
                  Sign In
                </Button>
                <h6 className="divider line one-line">Or</h6>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mb: 2, bgcolor: "#EA4335" }}
                  onClick={loginGoogle}
                >
                  <img
                    style={{ height: "20px", paddingRight: "5px" }}
                    src="https://img.icons8.com/color/16/000000/google-logo.png"
                    alt=""
                  />
                  SIGN IN USING GOOGLE
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link >
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
}