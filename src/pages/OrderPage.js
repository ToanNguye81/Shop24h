import { Grid } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeCartCost } from "../actions/cart.actions"
import { AllProduct } from "../components/OrderPage/AllProduct"
import { Invoice } from "../components/OrderPage/Invoice"
import SignInPage from "./SignInPage"
import { CircularProgress } from "@mui/material"

//Ver 2
export const OrderPage = () => {
    const dispatch = useDispatch()
    const { cart, cartCost } = useSelector((reduxData) => reduxData.cartReducers);
    const { customer, checkUserPending } = useSelector((reduxData) => reduxData.orderReducers);
    const { loggedUser } = useSelector((reduxData) => reduxData.signInReducers);

    useEffect(() => {
        dispatch(changeCartCost(cart));
    }, [cart])

    return (
        <React.Fragment>
            {loggedUser ?
                <React.Fragment>
                    <Grid container
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="flex-start" mt={5}>
                        <Grid item xs={12} md={6.5}>
                            <AllProduct cart={cart} />
                        </Grid>
                        <Grid item xs={11} md={3.5}>
                            {checkUserPending ?
                                <CircularProgress />
                                :
                                <Invoice
                                    initCustomer={customer}
                                    total={cartCost}
                                />
                            }
                        </Grid>
                    </Grid>
                </React.Fragment>
                :
                <SignInPage />
            }
        </React.Fragment>
    )
}


