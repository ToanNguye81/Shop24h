import {Card, CardContent, CardMedia, Grid, Typography, CardActions, Container } from "@mui/material"
import React from "react"
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

export const FilterResult=()=>{
 return(
    <React.Fragment>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}} mt={1}>
        {
          Products.slice(0, 12).map((item, i) => {
            return (
              <Card sx={{ width: 200 ,m:2 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="150"
                image={item.imageUrl}
              />
              <hr/>
              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  {item.name}
                </Typography>
                <Typography gutterBottom variant="h7" component="div">
                  $ {item.buyPrice}
                </Typography>
              </CardContent>
              <CardActions >
                <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center">
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