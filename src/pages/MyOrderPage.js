import { Card } from "@mui/material"
import { Container } from "@mui/system"
import React from "react"
import { OrderTable } from "../components/MyOrderPage/OrderTable"

export const MyOrderPage = () => {
    return (
        <React.Fragment>
            <Container>
                <Card sx={{m:3}}>
                    <OrderTable/>
                </Card>
            </Container>
        </React.Fragment>
    )
}
