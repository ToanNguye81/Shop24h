import Carousel from 'react-multi-carousel';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Products from "../../../database_sample/productsData.json"
import { Grid } from '@mui/material';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
function TrendingProducts() {
  return (
    <div class="pr-3 pl-3">
      <div>
        <h1 class="text-center mb-5 mt-4 pb-3">TRENDING PRODUCTS</h1>
      </div>
      <Carousel responsive={responsive}>
        {
          Products.slice(0, 12).map((item, i) => {
            return (
              <Grid  container
              direction="column"
              justifyContent="center"
              alignItems="center">

              <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="300"
                image={item.imageUrl}
              />
              <hr/>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {item.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  $ {item.buyPrice}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 {item.description}
                </Typography>
              </CardContent>
              <CardActions >
                <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Button size="medium" variant="contained" color="warning">Add to Card</Button>
                <Button size="medium">Detail</Button>
                </Grid>
              </CardActions>
            </Card>
            </Grid>

            )
          }
          )
        }
      </Carousel>;
    </div>
  );
}
export default TrendingProducts;