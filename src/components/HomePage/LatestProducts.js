import { Box } from '@mui/material';
import React from 'react';
import { ButtonBases } from './ButtonProduct';
import Typography from '../common/Typography';


function LatestProducts({ images }) {
  return (
    <Box component="section" sx={{ mt: 8, mb: 4}}>
      <Typography variant="h4" marked="center" align="center" component="h2" mb={8} >
        Latest products
      </Typography>
      <ButtonBases images={images} />
    </Box>
  );
}
export default LatestProducts;