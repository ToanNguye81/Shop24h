import { Grid } from "@mui/material"
import React from "react"

export const ImageProduct = () => {
    return (
        <React.Fragment>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="stretch" sx={{border:"0.5px solid orange"}} >
                <a href="https://images.vans.com/is/image/Vans/UUK24I-HERO?$583x583$">
                    <img src="https://images.vans.com/is/image/Vans/UUK24I-HERO?$583x583$" alt="product-img" width="100%" height="auto" />
                </a>
            </Grid>
        </React.Fragment>
    )
}