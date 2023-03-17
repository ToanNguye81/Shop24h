import { Container, Grid } from '@mui/material';
import Products from "../../database_sample/productsData.json"
import { CardInfo } from './CardInfo';

function TrendingProducts() {
  return (
    <div  className="pr-3 pl-3">
      <div>
        <h2  className="text-center mb-5 mt-5">TRENDING PRODUCT</h2>
      </div>
      <Grid container sx={{ backgroundColor: "#D84A34" ,pt:5}}>
        <Grid container spacing={2} >
          <Grid item xs={12} sm={7} md={7}> <CardInfo ProductsData={Products} /></Grid>
          <Grid item xs={12} sm={5} md={5}>
            <img src='https://cdn11.bigcommerce.com/s-pbq04mq4he/images/stencil/1280x1280/products/5431/1720/_DSC1045__03956.1670265813.jpg?c=1' />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default TrendingProducts;