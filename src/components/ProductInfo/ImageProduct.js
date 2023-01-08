import { Grid } from "@mui/material"
import React from "react"

export const ImageProduct = (imageUrl) => {
    return (
        <React.Fragment>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="stretch" sx={{border:"0.5px solid orange"}} >
                <a href={imageUrl}>
                    <img src={imageUrl} alt="product-img" width="100%" height="auto" />
                </a>
            </Grid>
        </React.Fragment>
    )
}