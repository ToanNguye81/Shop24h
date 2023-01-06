import { Grid } from "@mui/material"
import React from "react"
import { TitleOrder } from "../components/Body/OrderPage/TitleOrder"
import { Description } from "../components/Body/OrderPage/Description"
import { ImageProduct } from "../components/Body/OrderPage/ImageProduct"
import { OrderInfo } from "../components/Body/OrderPage/OrderInfo"

export const OrderPage = () => {return(
    <React.Fragment>
        <TitleOrder xs={12}/>
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