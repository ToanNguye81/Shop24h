import { Container } from '@mui/material';
import Products from "../../database_sample/productsData.json"
import { CardInfo } from '../CardInfo';

function LatestProducts() {
  return (
    <div class="pr-3 pl-3">
      <div>
        <h2 class="text-center mb-5 mt-5">LATEST PRODUCT</h2>
      </div>
      <Container>
      <CardInfo ProductsData={Products} limit={8}/>
      </Container>
    </div>
  );
}
export default LatestProducts;