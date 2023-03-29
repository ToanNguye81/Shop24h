import PropTypes from 'prop-types';
// @mui
import { Grid, Grow } from '@mui/material';
import ProductCard from './ProductCard';

// ----------------------------------------------------------------------

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default function ProductList({ products, ...other }) {
  return (
    <Grid container spacing={3} {...other} justifyContent="space-around" >
      {products.map((product, index) => (
          <Grid key={index} item xs={12} sm={6} md={2.3}>
            <ProductCard product={product} />
          </Grid>
      ))}
    </Grid>
  );
}
