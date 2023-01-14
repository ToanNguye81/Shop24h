import { Grid } from "@mui/material"
import React from "react"
import { Container } from "react-bootstrap"
import { AllOrder } from "../components/OrderPage/AllOrder"
import { CartTotal } from "../components/OrderPage/CartTotal"

export const OrderPage = () => {
    return (
        <React.Fragment>
                <Grid container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="flex-start" mt={20}>
                    <Grid item xs={12} md={6.5}>
                        <AllOrder />
                    </Grid>
                    <Grid item xs={12} md={3.5}>
                        <CartTotal />
                    </Grid>
                </Grid>
        </React.Fragment>
    )
}