import { Box, Grid } from '@mui/material';
import Products from "../../database_sample/productsData.json"
import { CardInfo } from './CardInfo';
import Typography from '../common/Typography';


function TrendingProducts() {
  return (
    <Box component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2" mb={7}>
        Trending products
      </Typography>
      <Grid container sx={{ backgroundColor: "#D84A34", pt: 5 }}>
        <Grid container spacing={2} >
          <Grid item xs={12} sm={7} md={7}> <CardInfo ProductsData={Products} /></Grid>
          <Grid item xs={12} sm={5} md={5}>
            <img src='https://cdn11.bigcommerce.com/s-pbq04mq4he/images/stencil/1280x1280/products/5431/1720/_DSC1045__03956.1670265813.jpg?c=1' />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
export default TrendingProducts;