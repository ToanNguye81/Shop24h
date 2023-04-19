import { Box, CircularProgress, Grid } from "@mui/material"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { useParams } from "react-router-dom"
import { getProductById } from "../actions/product.actions"
import { ImageProduct } from "../components/DetailProductPage/ImageProduct"
import { Others } from "../components/DetailProductPage/Others"
import { ProductInfo } from "../components/DetailProductPage/ProductInfo"
import { TitleBrand } from "../components/DetailProductPage/TitleBrand"

export const DetailProductPage = () => {
    const dispatch = useDispatch();
    const { productById, error, getProductByIdPending } = useSelector((reduxData) => reduxData.productReducers);
    const { productId } = useParams();
    useEffect(() => {
        if (productId)
            dispatch(getProductById(productId))
    }, [productId]);

    return (

        <React.Fragment>
            {productById == null || productById === undefined ?
                <CircularProgress />
                :
                <Box mt={{xs:2,md:0}} mr={{xs:2,md:0}} ml={{xs:2,md:0}}>
                    <TitleBrand brand={productById.brand}/>
                    <Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3} mt={{xs:0,sm:5,md:5}} >
                        <Grid item xs={12} md={5} >
                            <ImageProduct product={productById} />
                        </Grid>
                        <Grid item xs={12} md={5} pb={3} >
                            <ProductInfo product={productById} />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3} mt={{xs:0,sm:5,md:5}} >
                    {/* <Others/> */}
                    </Grid>
                </Box>
            }
        </React.Fragment>
    )
}
