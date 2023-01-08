import { Grid, Typography, Button } from "@mui/material"
import React from "react";
import {  useSelector } from "react-redux";
import Products from "../../database_sample/productsData.json"


export const OrderInfo = () => {
    const { productId } = useSelector((reduxData) => reduxData.detailReducer);
    const tryData = Products.find(({ id }) => id === productId);
    return(
        <React.Fragment>
            <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="stretch"
                sx={{ display: { xs: 'none', md: 'flex'},height: "100%" }}
            >
                <h1 style={{ color: "black" }}>
                    <strong>{tryData.name}</strong>
                </h1>
                <Typography fontSize={30}>
                    Type: <strong>{tryData.type}</strong>
                </Typography>
                <Typography fontSize={20}>Gender: {tryData.gender}</Typography>
                <hr />
                <Typography fontSize={20}>Size: </Typography>
                <hr />
                <Typography fontSize={20}>
                    Promotion Price: {tryData.promotionPrice}
                </Typography>
                <Typography fontSize={20}>Buy Price: <strong style={{color:"red"}}>{tryData.buyPrice}</strong></Typography>
                <Typography fontSize={20}>
                    Description: {tryData.description}
                </Typography>
                <hr/>
                <Grid container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="stretch">
                    <Button class="btn col-sm-4 btn-warning rounded-pill pb-3 pt-3">ADD TO CART</Button>
                    <Button class="btn col-sm-4 btn-danger rounded-pill pb-3 pt-3">BUY INSTANTLY</Button>
                </Grid>
            </Grid>

            <Grid
               container
               direction="column"
               justifyContent="center"
               alignItems="center"
                sx={{ display: { xs: 'flex', md: 'none'}}}
            >
                <h1 style={{ color: "black" }}>
                    <strong>{tryData.name}</strong>
                </h1>
                <Typography fontSize={30}>
                    Type: <strong>{tryData.type}</strong>
                </Typography>
                <Typography fontSize={20}>Gender: {tryData.gender}</Typography>
                <hr />
                <Typography fontSize={20}>Size: </Typography>
                <hr />
                <Typography fontSize={20}>
                    Promotion Price: {tryData.promotionPrice}
                </Typography>
                <Typography fontSize={20}>Buy Price: <strong style={{color:"red"}}>{tryData.buyPrice}</strong></Typography>
                <Typography fontSize={20} sx={{textAlign: 'center'}}>
                    Description: {tryData.description}
                </Typography>
                <hr/>
                <Grid container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="stretch">
                    <Button class="btn col-sm-4 btn-warning rounded-pill pb-3 pt-3">ADD TO CART</Button>
                    <Button class="btn col-sm-4 btn-danger rounded-pill pb-3 pt-3">BUY INSTANTLY</Button>
                </Grid>
            </Grid>


            
        </React.Fragment>
    );
}