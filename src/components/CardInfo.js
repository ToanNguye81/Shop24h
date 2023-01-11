import { Card, CardContent, CardMedia, Grid, Typography, CardActionArea } from "@mui/material"
import React from "react"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { getDetailProduct } from "../actions/detail.actions";


export const CardInfo = ({ProductsData}) => {
  const dispatch =useDispatch();

  const navigate = useNavigate();

  const onBtnDetailClick =(idProduct)=>{
    navigate("/products/"+idProduct)
    dispatch(getDetailProduct(idProduct)
    )
  }

  return (
    <React.Fragment>
      <Grid container justifyContent="space-around" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} mt={0}>
        {
          ProductsData.slice(0,10).map((item, i) => {
            return (
              <Card sx={{ width: 200, m: 2 }} key={item.id} >
              <CardActionArea onClick={()=>onBtnDetailClick(item.id)}>
                <CardMedia
                  component="img"
                  alt={item.brand}
                  height="180"
                  image={item.imageUrl}
                />
                <CardContent sx={{ paddingTop: 1, paddingBottom: 1 }}>
                <Stack spacing={1}>
                    <Rating name="half-rating-read" defaultValue={5} readOnly />
                  </Stack>
                  <CardActionArea gutterBottom sx={{ color: "#3498db" }}>
                    <a className="text h5">{item.name}</a>
                  </CardActionArea>
                  <Typography gutterBottom component="p">
                    <strong>
                      {item.promotionPrice} $ <del>{item.buyPrice} $</del>
                      </strong>
                  </Typography>
                </CardContent>
              </CardActionArea>
              </Card>

            )
          }
          )
        }
      </Grid>
    </React.Fragment>
  )
}