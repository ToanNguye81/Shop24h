import { Grid } from "@mui/material"
import React from "react"
import { Description } from "../components/Body/ProductInfo/Description"
import { ImageProduct } from "../components/Body/ProductInfo/ImageProduct"
import { OrderInfo } from "../components/Body/ProductInfo/OrderInfo"
import { TitleBrand } from "../components/Body/ProductInfo/TitleBrand"

export const ProductInfo = () => {return(
    <React.Fragment>
        <TitleBrand xs={12}/>
        <Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3} mt={2} >
            <Grid item xs={12} md={5}>
                <ImageProduct/>
            </Grid>
            <Grid item xs={12} md={5} pb={3}>
                <OrderInfo/>
            </Grid>
        </Grid>
        <Grid xs={12}>
            <Description/>
        </Grid>
    </React.Fragment>
    )
}