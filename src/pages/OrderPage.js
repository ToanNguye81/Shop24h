import { Grid } from "@mui/material"
import React from "react"
import { AllOrder } from "../components/Body/OrderPage/AllOrder"
import { TitleOrder } from "../components/Body/OrderPage/TitleOrder"

export const OrderPage = () => {
    return (
        <React.Fragment>
            <TitleOrder />
            <AllOrder/>
        </React.Fragment>
    )
}