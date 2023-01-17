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
import { fetchCountries } from '../actions/signUp.actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const theme = createTheme();

export const SignUp=()=> {
  const dispatch=useDispatch();

  const { loadCountriesPending,countryOptions } = useSelector((reduxData) => reduxData.signUpReducers);

  console.log(loadCountriesPending)
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);
  
  console.log(countryOptions)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }} mt={5}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} sx={{
            backgroundImage: 'url(https://source.unsplash.com/random/?sneaker)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box   sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center',   }} >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField size="small" autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField size="small" required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="family-name"/>
              </Grid>
              <Grid item xs={12}>
                <TextField size="small" required fullWidth id="Phone" label="Phone" name="Phone" autoComplete="Phone"/>
              </Grid>
              <Grid item xs={12}>
                <TextField size="small" required fullWidth id="email" label="Email" name="email" autoComplete="email"/>
              </Grid>
              <Grid item xs={12}>
                {/* <TextField size="small" required fullWidth id="country" label="Country" name="country" autoComplete="country"/> */}
                <FormControl size="small" required fullWidth>
                <InputLabel id="select-country">Country</InputLabel>
                <Select labelId="select-country" fullWidth id="country" label="Country" name="country" autoComplete="country">
                {countryOptions?
                countryOptions.map((countryOption,index)=>{ <MenuItem value={countryOption.name.common}>{countryOption.name.common}</MenuItem>}):
                null
                }
                </Select>
                </FormControl>
                
              </Grid>
              <Grid item xs={12}>
                <TextField size="small" required fullWidth id="city" label="City" name="city" autoComplete="city"/>
              </Grid>
              <Grid item xs={12}>
                <TextField size="small" required fullWidth id="address" label="Address" name="address" autoComplete="address"/>
              </Grid>
              <Grid item xs={12}>
                <TextField size="small" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password"/>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."/>
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

