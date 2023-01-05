import { Grid } from "@mui/material"
import React from "react"
import { ImageProduct } from "../components/Body/ProductInfo/ImageProduct"
import { OrderInfo } from "../components/Body/ProductInfo/OrderInfo"
import { TitleName } from "../components/Body/ProductInfo/TitleName"

export const ProductInfo = () => {return(
    <React.Fragment>
        <TitleName xs={12}/>
        <Grid container direction="row" justifyContent="center" alignItems="stretch">
            <Grid item xs={12} md={5}>
                <ImageProduct/>
            </Grid>
            <Grid item xs={12} md={5}>
                <OrderInfo/>
            </Grid>
        </Grid>
    </React.Fragment>
    )
}