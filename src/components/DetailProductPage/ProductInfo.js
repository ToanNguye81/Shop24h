import { ShoppingCartCheckout } from "@mui/icons-material";
import { Grid, Typography, Button } from "@mui/material"
import MoneyIcon from '@mui/icons-material/Money';
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../actions/cart.actions";

export const ProductInfo = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { cart } = useSelector((reduxData) => reduxData.cartReducers);


    const handleClickAddToCart = (product) => {
       dispatch(addToCart(cart,product))
    }

    const handleClickBuyNow = (product) => {
        dispatch(addToCart(cart,product))
        navigate("/orders")
    }

    return (
        <React.Fragment>
            <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="stretch"
                sx={{ maxWidth: "800px", margin: "auto" }}
            >
                <h1 style={{ color: "black", textAlign: "center" }}>
                    <strong>{product.name}</strong>
                </h1>
                <Typography fontSize={{ xs: 20, sm: 30 }}>
                    Type: <strong>{product.type}</strong>
                </Typography>
                <Typography fontSize={{ xs: 16, sm: 20 }}>Gender: {product.gender}</Typography>
                <hr />
                <Typography fontSize={{ xs: 16, sm: 20 }}>Size: </Typography>
                <hr />
                <Typography fontSize={{ xs: 16, sm: 20 }}>Buy Price: {product.buyPrice}</Typography>
                <Typography fontSize={{ xs: 16, sm: 20 }}>
                    Promotion Price: <strong style={{ color: "red" }}>{product.promotionPrice}</strong>
                </Typography>
                <Typography fontSize={{ xs: 16, sm: 20 }}>
                    Description: {product.description}
                </Typography>
                <Grid
                    container
                    direction={{ xs: "column", sm: "row" }}
                    justifyContent="space-evenly"
                    alignItems="center"
                    sx={{ marginTop: "16px" }}
                >
                    <Button 
                        sx={{
                            borderRadius: "8px",
                            padding: { xs: "10px 0", sm: "10px 20px" },
                            margin: { xs: "10px 0 10px", sm: "10px 20px" },
                            width: { xs: "100%", sm: "auto" },
                            fontSize: { xs: 16, sm: 18 },
                            "&:hover": {
                                backgroundColor: "#5ED2FF",
                            },
                        }}
                        variant="outlined"
                        onClick={() => handleClickAddToCart(product)}
                    >
                       <ShoppingCartCheckout sx={{ marginRight: "8px" }}/> ADD TO CART
                    </Button>
                    <Button
                        sx={{
                            backgroundColor: "#292929",
                            color: "#fff",
                            borderRadius: "8px",
                            padding: { xs: "10px 0", sm: "10px 20px" },
                            width: { xs: "100%", sm: "auto" },
                            fontSize: { xs: 16, sm: 18 },
                            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
                            "&:hover": {
                                backgroundColor: "#323232",
                            },
                        }}
                        onClick={()=>handleClickBuyNow(product)}
                    >
                        <MoneyIcon sx={{ marginRight: "8px" }}/>  BUY NOW
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>

    );
}


