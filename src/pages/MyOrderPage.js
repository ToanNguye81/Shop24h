import { Card } from "@mui/material"
import { Container } from "@mui/system"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getAllOrderOfCustomer } from "../actions/myOrder.action"
import { OrderTable } from "../components/MyOrderPage/OrderTable"

export const MyOrderPage = () => {

    const { customerId } = useParams()
    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const {orders,pending}=useSelector(reduxData=>reduxData.myOrderReducers)

    useEffect(() => {
        dispatch(getAllOrderOfCustomer(rowsPerPage, page, "", customerId));
    }, [rowsPerPage, page, customerId]);

    return (
        <React.Fragment>
            <Container>
                <Card sx={{m:3}}>
                    <OrderTable orders={orders} pending={pending}  />
                </Card>
            </Container>
        </React.Fragment>
    )
}
