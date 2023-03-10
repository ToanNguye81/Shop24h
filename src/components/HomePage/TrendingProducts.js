import { Container, Grid } from '@mui/material';
import Products from "../../database_sample/productsData.json"
import { CardInfo } from '../CardInfo';

function TrendingProducts() {
  return (
    <div class="pr-3 pl-3">
      <div>
        <h2 class="text-center mb-5 mt-5">TRENDING PRODUCT</h2>
      </div>
      <Grid container fullWidth sx={{ backgroundColor: "#D84A34" ,pt:5}}>
        <Grid container spacing={2} >
          <Grid item xs={12} sm={7} md={7}> <CardInfo ProductsData={Products} /></Grid>
          <Grid item xs={12} sm={5} md={5}>
            <img src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8439f823-86cf-4086-81d2-4f9ff9a66866/air-max-90-big-kids-shoe-1wzwJM.jpg' />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default TrendingProducts;