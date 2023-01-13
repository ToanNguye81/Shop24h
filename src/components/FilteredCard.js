import { Card, CardContent, CardMedia, Grid, Typography, CardActionArea } from "@mui/material"
import React from "react"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom"; 
import { useDispatch } from "react-redux";
import { getDetailProduct } from "../actions/detail.actions";


export const FilteredCard = ({ ProductsData }) => {
  const navigate = useNavigate();
  const onBtnDetailClick =(product)=>{
    navigate("/detail-product/"+product._id)
  }
  return (
    <React.Fragment>
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        {
          ProductsData.map((item, i) => {
            return (
              <Grid item xs={12} sm={4} md={3} key={item._id} mb={5}>
                <CardActionArea onClick={() => onBtnDetailClick(item)}>
                  <CardMedia
                    component="img"
                    alt={item.brand}
                    height="auto"
                    image={item.imageUrl}
                  />
                  <CardContent sx={{ paddingTop: 1, paddingBottom: 1 }}>
                  <Typography gutterBottom component="a" sx={{color:"#7f8c8d"}}>
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