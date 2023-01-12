import { Grid } from "@mui/material"
import React from "react"
import { Description } from "../components/ProductInfo/Description"
import { ImageProduct } from "../components/ProductInfo/ImageProduct"
import { OrderInfo } from "../components/ProductInfo/OrderInfo"
import { TitleBrand } from "../components/ProductInfo/TitleBrand"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { getDetailProduct } from "../actions/detail.actions"


export const ProductInfo = () => {

    const dispatch = useDispatch();
    const { productId } = useParams();
    const { detailProduct,pending } = useSelector((reduxData) => reduxData.detailReducer);
    
    // useEffect(() => {
    //     if (productId) {
    //         console.log(productId)
    //         dispatch(getDetailProduct(productId))
    //     }
    // })

    return (
        <>
            {pending ?
                <React.Fragment>
                    <TitleBrand xs={12} detailProduct={detailProduct} />
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
                    </Grid>
                </React.Fragment>
                : null}
        </>


    )
}