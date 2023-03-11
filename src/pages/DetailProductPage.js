import { Description, PendingActionsOutlined } from "@mui/icons-material"
import { Box, CircularProgress, Grid, Typography } from "@mui/material"
import { Container, Stack } from "@mui/system"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { useParams } from "react-router-dom"
import { getProductById } from "../actions/product.actions"
import { ImageProduct } from "../components/DetailProductPage/ImageProduct"
import { ProductInfo } from "../components/DetailProductPage/ProductInfo"
import { TitleBrand } from "../components/DetailProductPage/TitleBrand"
// import { TitleBrand } from "../components/DetailProductPage/TitleBrand"

export const DetailProductPage = () => {
    const dispatch = useDispatch();
    const { productById, error, getProductByIdPending } = useSelector((reduxData) => reduxData.productReducers);
    const { productId } = useParams();
    useEffect(() => {
        if (productId)
            dispatch(getProductById(productId))
    }, [productId]);

    return (
        // <React.Fragment>
        //   <Container>
        //     <Stack direction="row" alignItems="center" justifyContent="space-between" mt={20} mb={5}>
        //       <Typography variant="h4" gutterBottom>
        //         {productById.name}
        //       </Typography>

        //     </Stack>
        //     {error ? null :
        //       getProductByIdPending ?
        //         <CircularProgress /> 
        //         :null
        //     }
        //   </Container>
        // </React.Fragment>

        <React.Fragment>
            {productById == null || productById === undefined ?
                <PendingActionsOutlined />
                :
                <Box>
                    <TitleBrand brand={productById.brand}/>
                    <Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3} mt={5} >
                        <Grid item xs={12} md={5} >
                            <ImageProduct product={productById} />
                        </Grid>
                        <Grid item xs={12} md={5} pb={3}>
                            <ProductInfo product={productById} />
                        </Grid>
                    </Grid>
                    <Grid xs={12}>
                        <Description product={productById} />
                    </Grid>
                </Box>
            }
        </React.Fragment>
    )
}
