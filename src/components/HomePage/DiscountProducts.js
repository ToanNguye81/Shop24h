import { Box, Grid } from '@mui/material';
import Products from "../../database_sample/productsData.json"
import { CardInfo } from './CardInfo';
import Typography from '../common/Typography';


function DiscountProducts() {
  return (
    <Box component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2" mb={7}>
        Discount products
      </Typography>
      <Grid container sx={{ backgroundColor: "#2f3640" ,pt:5}} >
      <CardInfo ProductsData={Products}/>
      </Grid>
    </Box>
  );
}
export default DiscountProducts;