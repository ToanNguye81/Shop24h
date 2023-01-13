import { Grid } from "@mui/material"
import React from "react"
import { AllOrder } from "../components/OrderPage/AllOrder"
import { CartTotal } from "../components/OrderPage/CartTotal"

export const OrderPage = () => {
    return (
        <React.Fragment>
            <Grid container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start" mt={20}>
                <Grid item xs={12} md={8}>
                    <AllOrder />
                </Grid>
                <Grid item xs={12} md={4}>
                    <CartTotal />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}