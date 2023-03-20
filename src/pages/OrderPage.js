import { Grid } from "@mui/material"
import { onAuthStateChanged } from "firebase/auth"
import Cookies from "js-cookie"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { changeCartCost } from "../actions/cart.actions"
import { checkUser } from "../actions/order.actions"
import { AllProduct } from "../components/OrderPage/AllProduct"
import { Invoice } from "../components/OrderPage/Invoice"
import auth from "../firebase.config"
import SignInPage from "./SignInPage"
import { CircularProgress } from "@mui/material"

//Ver 2
export const OrderPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { cart, cartCost } = useSelector((reduxData) => reduxData.cartReducers);
    const { customer, checkUserPending } = useSelector((reduxData) => reduxData.orderReducers);

    useEffect(() => {
        dispatch(changeCartCost(cart));
    }, [cart])
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            dispatch(checkUser())
          }
          else {
            navigate("/signIn")
          }
        })
    }, [Cookies.get("accessToken")])

    return (
        <React.Fragment>
            {checkUserPending ? (
                <CircularProgress />
            ) : Cookies.get("accessToken") ? (
                <Grid container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="flex-start" mt={5}>
                    <Grid item xs={12} md={6.5}>
                        <AllProduct cart={cart} />
                    </Grid>
                    <Grid item xs={11} md={3.5}>
                        <Invoice
                            initCustomer={customer}
                            total={cartCost}
                        />
                    </Grid>
                </Grid>
            ) : (
                <SignInPage />
            )}
        </React.Fragment>
    )
}