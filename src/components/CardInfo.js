import { Card, CardContent, CardMedia, Grid, Typography, CardActionArea } from "@mui/material"
import React from "react"
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
      <Grid container spacing={{ xs: 2, md: 2 }} >
        {
          ProductsData.slice(0, 8).map((item, i) => {
            return (
              <Grid item xs={6} sm={4} md={3} key={item._id} mb={5}>
              <CardActionArea onClick={() => onBtnDetailClick(item.id)} key={item.id}>
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