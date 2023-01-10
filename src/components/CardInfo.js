import { Card, CardContent, CardMedia, Grid, Typography, CardActions, Button, CardActionArea } from "@mui/material"
import React from "react"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Info, ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProduct } from "../actions/detail.actions";


export const CardInfo = ({ProductsData}) => {
  const dispatch =useDispatch();
  const { productId } = useSelector((reduxData) => reduxData.detailReducer);

  const navigate = useNavigate();
  const handleClick = (name) => {
    console.log("Đã click " + name)
  }

  const onBtnDetailClick =(idProduct)=>{
    navigate("/products/"+idProduct)
    dispatch(getDetailProduct(idProduct)
    )
  }

  return (
    <React.Fragment>
      <Grid container   justifyContent="space-around" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} mt={0}>
        {
          ProductsData.map((item, i) => {
            return (
              <Card sx={{ width: 200, m: 2 }}>
                <CardMedia
                  component="img"
                  alt={item.brand}
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
                    $ {item.buyPrice}  <del>{item.promotionPrice}</del>
                  </Typography>
                </CardContent>

                <CardActions >
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center">
                    <Button variant="contained" color="warning"  size="small"><ShoppingCart/></Button>
                    <Button onClick={()=>onBtnDetailClick(item.id)}
                    variant="contained" color="primary" size="small"
                    ><Info/>
                    </Button>
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