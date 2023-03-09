import {  Card, Grid } from "@mui/material"
import React from "react"

export const ImageProduct = ({ product }) => {
    return (
        <Card sx={{minHeight:450}}>
            <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch" sx={{ border: "none" }} >
                    <a href={product.imageUrl}>
                        <img src={product.imageUrl} alt="product-img"/>
                    </a>
                </Grid>
        </Card>
    )
}