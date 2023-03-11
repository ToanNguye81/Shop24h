import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
import ShopProductCard from './ProductCard';

// ----------------------------------------------------------------------

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default function ProductList({ products, ...other }) {
  return (
    <Grid container spacing={3} {...other}  justifyContent="space-around" >
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={2.3}>
          <ShopProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}