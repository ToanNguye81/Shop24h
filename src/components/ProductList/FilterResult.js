import { Card, CardContent, CardMedia, Grid, Typography, CardActions, Button, CardActionArea } from "@mui/material"
import React from "react"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Products from "../../database_sample/productsData.json"
import { Info, ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CardInfo } from "../CardInfo";


export const FilterResult = () => {
  // const dispatch =useDispatch();
  // const { productId } = useSelector((reduxData) => reduxData.detailReducer);



  // const navigate = useNavigate();
  // const handleClick = (name) => {
  //   console.log("Đã click " + name)
  // }

  // const onBtnDetailClick =(idProduct)=>{
  //   navigate("/products/"+idProduct)
  //   dispatch(
  //     onProductInfo(idProduct)
  //   )
  // }

  return (
    <React.Fragment>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2,lg:3 }} mt={0}>
        <CardInfo ProductsData={Products}/>
      </Grid>
    </React.Fragment>
  )
}