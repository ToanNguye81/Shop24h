import { CardMedia, Grid, CardActionArea } from "@mui/material"
import React from "react"

export const CardInfo = ({ ProductsData }) => {

  return (
    <React.Fragment>
      <Grid container spacing={{ xs: 2, md: 2 }} >
        {
          ProductsData.slice(0, 8).map((item, index) => {
            return (
              <Grid item xs={6} sm={4} md={3} key={index} mb={5}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={item.brand}
                  height="auto"
                  image={item.imageUrl}
                />
              </CardActionArea>
              </Grid>
            )
          }
          )
        }
      </Grid>
    </React.Fragment>
  )
}