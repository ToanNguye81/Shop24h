import { Container, Grid } from '@mui/material';
import React from 'react';
import Products from "../../database_sample/productsData.json"
import { CardInfo } from './CardInfo';

function LatestProducts() {
  return (
    <React.Fragment>
      <div>
        <h2  className="text-center mb-5 mt-5">LATEST PRODUCT</h2 >
      </div>
      <Grid container sx={{ backgroundColor: "#34495E" ,pt:5}}>
        <Grid container direction="row"
          spacing={2} alignItems="center" >
          <Grid item xs={12} sm={4.5} md={4.5}>
            <img src='https://product.hstatic.net/1000383440/product/dscf5659_84d6fde8ddd141c08d356f4a00025078_master.jpg' />
          </Grid>
          <Grid item xs={12} sm={7.5} md={7.5}> <CardInfo ProductsData={Products} /></Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default LatestProducts;