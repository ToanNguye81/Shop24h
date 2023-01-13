import { Card, CardContent, CardMedia, Grid, Typography, CardActionArea } from "@mui/material"
import React from "react"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProduct } from "../actions/detail.actions";


export const CardInfo = ({ ProductsData }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onBtnDetailClick = (idProduct) => {
    navigate("/products/" + idProduct)
    dispatch(getDetailProduct(idProduct)
    )
  }

  return (
    <React.Fragment>
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        {
          ProductsData.slice(0, 8).map((item, i) => {
            return (
              <Grid item xs={12} sm={4} md={3} key={item._id} mb={5}>
              <CardActionArea onClick={() => onBtnDetailClick(item.id)} key={item.id}>
                <CardMedia
                  component="img"
                  alt={item.brand}
                  height="auto"
                  image={item.imageUrl}
                />
                <CardContent sx={{ paddingTop: 1, paddingBottom: 1 }}>
                  <Typography gutterBottom component="a" sx={{color:"#bdc3c7"}}>
                    <a>{item.name}</a>
                  </Typography>
                  <Typography component="p" sx={{color:"#7f8c8d"}}>
                    <strong>
                     ${item.promotionPrice}  <del>${item.buyPrice} </del>
                    </strong>
                  </Typography>
                </CardContent>
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