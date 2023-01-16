import { Grid } from "@mui/material"
import React from "react"

export const ImageProduct = ({detailProduct}) => {
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