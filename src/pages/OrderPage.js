import { Grid } from "@mui/material"
import { onAuthStateChanged } from "firebase/auth"
import React, { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { checkUser } from "../actions/order.actions"
import { AllProduct } from "../components/OrderPage/AllProduct"
import { Invoice } from "../components/OrderPage/Invoice"
import auth from "../firebase.config"

export const OrderPage = () => {
    const dispatch=useDispatch()
    const { cart } = useSelector((reduxData) => reduxData.cartReducers);
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(checkUser(user.accessToken))
            }
        })
    }, [])

    return (
        <React.Fragment>
            <Grid container
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-start" mt={5}>
                <Grid item xs={12} md={6.5}>
                    <AllProduct cart={cart}/>
                </Grid>
                <Grid item xs={11} md={3.5}>
                    <Invoice />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}