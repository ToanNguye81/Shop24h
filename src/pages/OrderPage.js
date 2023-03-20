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

export const OrderPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { cart, cartCost } = useSelector((reduxData) => reduxData.cartReducers);

    useEffect(() => {
        dispatch(changeCartCost(cart));
    }, [cart])

    // useEffect(() => {
    // console.log(customer)    
    // }, [customer])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            dispatch(checkUser())
            console.log(user)
          }
          else {
            navigate("/signIn")
          }
        })
      }, [])

    return (
        <React.Fragment>
            {Cookies.get("accessToken") ? <Grid container
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-start" mt={5}>
                <Grid item xs={12} md={6.5}>
                    <AllProduct cart={cart} />
                </Grid>
                <Grid item xs={11} md={3.5}>
                    <Invoice
                        // initCustomer={customer}
                        total={cartCost}
                    />
                </Grid>
            </Grid> : <SignInPage />}
        </React.Fragment>
    )
}