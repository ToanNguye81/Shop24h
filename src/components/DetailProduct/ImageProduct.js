import { Grid } from "@mui/material"
import React from "react"
import {  useSelector } from "react-redux";

export const ImageProduct = ({detailProduct}) => {
    // const { detailProduct } = useSelector((reduxData) => reduxData.detailReducer);
    return (
        <React.Fragment>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="stretch" sx={{border:"none"}} >
                <a href={detailProduct.imageUrl}>
                    <img src={detailProduct.imageUrl} alt="product-img" width="100%" height="auto" />
                </a>
            </Grid>
        </React.Fragment>
    )
}