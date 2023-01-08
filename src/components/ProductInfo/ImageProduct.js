import { Grid } from "@mui/material"
import React from "react"
import {  useSelector } from "react-redux";
import Products from "../../database_sample/productsData.json"

 

export const ImageProduct = () => {
    const { productId } = useSelector((reduxData) => reduxData.detailReducer);
    const tryData = Products.find(({ id }) => id === productId);
    return (
        <React.Fragment>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="stretch" sx={{border:"0.5px solid orange"}} >
                <a href={tryData.imageUrl}>
                    <img src={tryData.imageUrl} alt="product-img" width="100%" height="auto" />
                </a>
            </Grid>
        </React.Fragment>
    )
}