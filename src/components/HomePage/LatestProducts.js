import { Container, Grid } from '@mui/material';
import React from 'react';
import Products from "../../database_sample/productsData.json"
import { CardInfo } from '../CardInfo';

function LatestProducts() {
  return (
    <React.Fragment>
      <div>
        <h2 class="text-center mb-5 mt-5">LATEST PRODUCT</h2 >
      </div>
      <Grid container fullWidth sx={{ backgroundColor: "#34495E" ,pt:5}}>
        <Grid container direction="row"
          spacing={2} alignItems="center" >
          <Grid item xs={12} sm={4.5} md={4.5}>
            <img src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8439f823-86cf-4086-81d2-4f9ff9a66866/air-max-90-big-kids-shoe-1wzwJM.jpg' />
          </Grid>
          <Grid item xs={12} sm={7.5} md={7.5}> <CardInfo ProductsData={Products} /></Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default LatestProducts;