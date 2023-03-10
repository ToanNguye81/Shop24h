import { Container, Grid } from '@mui/material';
import Products from "../../database_sample/productsData.json"
import { CardInfo } from '../CardInfo';

function DiscountProducts() {
  return (
    <div class="pr-3 pl-3">
      <div>
        <h2 class="text-center mb-5 mt-5">DISCOUNT PRODUCT</h2>
      </div>
      <Grid container sx={{ backgroundColor: "#2f3640" ,pt:5}} >
      <CardInfo ProductsData={Products}/>
      </Grid>
    </div>
  );
}
export default DiscountProducts;