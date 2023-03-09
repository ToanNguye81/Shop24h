import { Grid, Typography, Button } from "@mui/material"
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../actions/cart.actions";

export const ProductInfo = ({ product }) => {
    const dispatch = useDispatch();
    const navigate =useNavigate()
    const { logged } = useSelector((reduxData) => reduxData.signInReducers);
    const { cart } = useSelector((reduxData) => reduxData.cartReducers);


    const onBtnAddToCart=(paramDetailProduct)=> {
        console.log(paramDetailProduct);
        if (logged) {
                dispatch(addToCart(cart,paramDetailProduct))
            }
            else{
            navigate("/login")
        }
    }
    const onBtnBuyInstantly = (product) => {

    }

    return (
        <React.Fragment>
            <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="stretch"
                sx={{ display: { xs: 'none', md: 'flex' }, height: "100%" }}
            >
                <h1 style={{ color: "black" }}>
                    <strong>{product.name}</strong>
                </h1>
                <Typography fontSize={30}>
                    Type: <strong>{product.type}</strong>
                </Typography>
                <Typography fontSize={20}>Gender: {product.gender}</Typography>
                <hr />
                <Typography fontSize={20}>Size: </Typography>
                <hr />
                <Typography fontSize={20}>Buy Price: {product.buyPrice}</Typography>
                <Typography fontSize={20}>
                    Promotion Price: <strong style={{ color: "red" }}>{product.promotionPrice}</strong>
                </Typography>
                <Typography fontSize={20}>
                    Description: {product.description}
                </Typography>
                <hr />
                <Grid container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="stretch">
                    <Button className="btn col-sm-4 rounded-pill pb-3 pt-3" sx={{color:"white",backgroundColor:"#717FE0"}} onClick={()=>onBtnAddToCart(product)}>ADD TO CART</Button>
                    <Button className="btn col-sm-4 rounded-pill pb-3 pt-3" onClick={onBtnBuyInstantly}>BUY INSTANTLY</Button>
                </Grid>
            </Grid>

            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ display: { xs: 'flex', md: 'none' } }}
            >
                <h1 style={{ color: "black" }}>
                    <strong>{product.name}</strong>
                </h1>
                <Typography fontSize={30}>
                    Type: <strong>{product.type}</strong>
                </Typography>
                <Typography fontSize={20}>Gender: {product.gender}</Typography>
                <hr />
                <Typography fontSize={20}>Size: </Typography>
                <hr />
                <Typography fontSize={20}>
                    Promotion Price: {product.promotionPrice}
                </Typography>
                <Typography fontSize={20}>Buy Price: <strong style={{ color: "red" }}>{product.buyPrice}</strong></Typography>
                <Typography fontSize={20} sx={{ textAlign: 'center' }}>
                    Description: {product.description}
                </Typography>
                <hr />
                <Grid container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="stretch">
                    <Button className="btn col-sm-3 rounded-pill pb-2 pt-2" sx={{color:"white",backgroundColor:"#717FE0"}} onClick={()=>onBtnAddToCart(product)}>ADD TO CART</Button>
                    <Button className="btn col-sm-3 btn-danger rounded-pill pb-2 pt-2" onClick={onBtnBuyInstantly}>BUY INSTANTLY</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}