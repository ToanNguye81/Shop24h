import { Grid } from "@mui/material"
import React from "react"
import { AllOrder } from "../components/OrderPage/AllOrder"
import { TitleOrder } from "../components/OrderPage/TitleOrder"

export const OrderPage = () => {
    return (
        <React.Fragment>
            <TitleOrder />
            <AllOrder/>
        </React.Fragment>
    )
}