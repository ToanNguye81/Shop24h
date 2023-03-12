import { Grid } from "@mui/material"
import React from "react"
import { AllOrder } from "../components/OrderPage/AllOrder"
import { Invoice } from "../components/OrderPage/Invoice"

export const OrderPage = () => {
    return (
        <React.Fragment>
                <Grid container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="flex-start" mt={5}>
                    <Grid item xs={12} md={6.5}>
                        <AllOrder/>
                    </Grid>
                    <Grid item xs={11} md={3.5}>
                        <Invoice />
                    </Grid>
                </Grid>
        </React.Fragment>
    )
}