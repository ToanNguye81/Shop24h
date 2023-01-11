import { Container } from '@mui/material';
import Products from "../../database_sample/productsData.json"
import { CardInfo } from '../CardInfo';

function Accessory() {
  return (
    <div class="pr-3 pl-3">
      <div>
        <h2 class="text-center mb-5 mt-5">ACCESSORY</h2>
      </div>
      <Container>
      <CardInfo ProductsData={Products} limit={10}/>
      </Container>
    </div>
  );
}
export default Accessory;