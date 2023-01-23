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
import { fetchCountries, getCountry, fetchCities, getCity, getAddress,createNewUser } from '../actions/signUp.actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const theme = createTheme();

export const SignUp = () => {
  const dispatch = useDispatch();

  const { loadCountriesPending, countryOptions, cityOptions,
    country, address, city } = useSelector((reduxData) => reduxData.signUpReducers);

  console.log(loadCountriesPending)

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  console.log(countryOptions)

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(createNewUser(data));
  };

  const handleCountryChange = (event) => {
    dispatch(getCountry(event.target.value));
    dispatch(fetchCities(event.target.value));
  }

  const handleCityChange = (event) => {
    dispatch(getCity(event.target.value));
  }

  const handleAddressChange = (event) => {
    dispatch(getAddress(event.target.value));
  }


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" mt={5}>
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
          <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField size="small"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField size="small" required fullWidth id="lastName" label="Last Name" name="lastName" />
                </Grid>
                <Grid item xs={12}>
                  <TextField size="small" required fullWidth id="phone" label="Phone" name="phone" />
                </Grid>
                <Grid item xs={12}>
                  <TextField size="small" required fullWidth id="email" label="Email" name="email" />
                </Grid>
                <Grid item xs={12}>
                  <FormControl size="small" required fullWidth>
                    <InputLabel id="select-country">Country</InputLabel>
                    <Select onChange={handleCountryChange} labelId="select-country" autoWidth id="country" label="Country" name="country" value={country}>
                      {countryOptions ?
                        countryOptions.map((countryOption, index) => <MenuItem key={countryOption.id} value={countryOption.iso2}>{countryOption.name}</MenuItem>) :
                        null
                      }
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl size="small" required fullWidth>
                    <InputLabel id="select-city">City</InputLabel>
                    <Select onChange={handleCityChange} size="small" required fullWidth id="city" labelId="select-city" label="City" name="city" value={city}>
                      {cityOptions ?
                        cityOptions.map((cityOptions, index) => <MenuItem key={cityOptions.id} value={cityOptions.id}>{cityOptions.name}</MenuItem>) :
                        null
                      }
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField onChange={handleAddressChange} size="small" required fullWidth id="address" label="Address" name="address" value={address} />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email." />
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

