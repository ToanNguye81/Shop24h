import { Grid } from "@mui/material"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { checkUser } from "../actions/order.actions"
import { AllProduct } from "../components/OrderPage/AllProduct"
import { Invoice } from "../components/OrderPage/Invoice"

export const OrderPage = () => {
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const { cart } = useSelector((reduxData) => reduxData.cartReducers);
    const { user } = useSelector((reduxData) => reduxData.signInReducers);

    useEffect(() => {
        dispatch(checkUser())
    }, [user]);


    return (
        <React.Fragment>
            <Grid container
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-start" mt={5}>
                <Grid item xs={12} md={6.5}>
                    <AllProduct cart={cart} />
                </Grid>
                <Grid item xs={11} md={3.5}>
                    <Invoice user={user} />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}