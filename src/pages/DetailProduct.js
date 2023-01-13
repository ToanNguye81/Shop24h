import { Grid } from "@mui/material"
import React from "react"
import { Description } from "../components/DetailProduct/Description"
import { ImageProduct } from "../components/DetailProduct/ImageProduct"
import { OrderInfo } from "../components/DetailProduct/OrderInfo"
import { TitleBrand } from "../components/DetailProduct/TitleBrand"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { getDetailProduct } from "../actions/detail.actions"
import { PendingActionsOutlined } from "@mui/icons-material"


export const DetailProduct = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const { detailProduct } = useSelector((reduxData) => reduxData.detailReducers)

    console.log(productId)
    console.log(productId);
    useEffect(() => {
        if (productId) {
            console.log(productId)
            dispatch(getDetailProduct(productId))
        }
    }, [productId])

    console.log(detailProduct)

    return (

        <React.Fragment>
            {detailProduct==null||detailProduct===undefined ?
                <PendingActionsOutlined/>
                :
                <><TitleBrand xs={12} detailProduct={detailProduct} />
                    <Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3} mt={2} >
                        <Grid item xs={12} md={5}>
                            <ImageProduct detailProduct={detailProduct} />
                        </Grid>
                        <Grid item xs={12} md={5} pb={3}>
                            <OrderInfo detailProduct={detailProduct} />
                        </Grid>
                    </Grid>
                    <Grid xs={12}>
                        <Description detailProduct={detailProduct} />
                    </Grid></>
            }
        </React.Fragment>

    )
}