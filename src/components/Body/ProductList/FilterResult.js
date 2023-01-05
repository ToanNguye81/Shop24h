import { Card, CardContent, CardMedia, Grid, Typography, CardActions, Button, CardActionArea } from "@mui/material"
import React from "react"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Products from "../../../database_sample/productsData.json"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};

export const FilterResult = () => {

  const handleClick = (name) => {
    console.log("Đã click " + name)
  }
  return (
    <React.Fragment>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} mt={0}>
        {
          Products.slice(0,12).map((item, i) => {
            return (
              <Card sx={{ width: 200, m: 2 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="150"
                  image={item.imageUrl}
                />
                <CardContent sx={{ paddingTop: 1, paddingBottom: 1 }}>
                <Stack spacing={1}>
                    <Rating name="half-rating-read" defaultValue={5} readOnly />
                  </Stack>
                  <CardActionArea gutterBottom sx={{ color: "#3498db" }}  onClick={() => handleClick(item.name)}>
                    <a className="text h5">{item.name}</a>
                  </CardActionArea>
                  <Typography gutterBottom component="p">
                    $ {item.buyPrice}  {item.promotionPrice}
                  </Typography>
                </CardContent>

                <CardActions >
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Button variant="contained" color="success" size="small">Add</Button>
                  </Grid>
                </CardActions>
              </Card>
            )
          }
          )
        }
      </Grid>
    </React.Fragment>
  )
}