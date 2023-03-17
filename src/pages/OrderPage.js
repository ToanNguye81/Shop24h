import { Grid } from "@mui/material"
import { onAuthStateChanged } from "firebase/auth"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { changeCartCost } from "../actions/cart.actions"
import { checkUser } from "../actions/order.actions"
import { AllProduct } from "../components/OrderPage/AllProduct"
import { Invoice } from "../components/OrderPage/Invoice"
import auth from "../firebase.config"

export const OrderPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const [user, setUser] = useState({})
    const { cart,cartCost } = useSelector((reduxData) => reduxData.cartReducers);
    const { customer } = useSelector((reduxData) => reduxData.orderReducers);

    useEffect(() => {
        dispatch(changeCartCost(cart));
    }, [cart])
   
    //Check customer with logged account
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // setUser(user)
                dispatch(checkUser(user))
            }
            else {
                navigate("/signin")
            }
        })
    },[])

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
                    <Invoice 
                    initCustomer={customer}
                    total={cartCost}
                    cart
                     />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}