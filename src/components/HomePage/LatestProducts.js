import { Grid } from '@mui/material';
import React from 'react';
// import Products from "../../database_sample/productsData.json"
import { ButtonBases } from './ButtonProduct';
// import { CardInfo } from './CardInfo';

function LatestProducts({ images }) {
  return (
    <React.Fragment>
      <div>
        <h2 className="text-center mb-5 mt-5">LATEST PRODUCT</h2 >
      </div>
      <ButtonBases images={images} />
    </React.Fragment>
  );
}
export default LatestProducts;