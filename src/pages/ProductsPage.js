// import { Grid } from "@mui/material"
// import React from "react"
// import { FilterBar } from "../components/ProductsPage/FilterBar"
// import { FilterResult } from "../components/ProductsPage/FilterResult"
// import { Breadcrumb } from "../components/BreadCrumb"

// export const ProductsPage = () => {
//     return (
//         <React.Fragment>
//             <Grid item xs={4} md={3} pt={3}>
//                     <FilterBar />
//                 </Grid>
//             <Grid container justifyContent={"center"} spacing={2} mt={3} pl={10} pr={2} mb={0} pb={0}>
//                 <Grid item xs={12} md={12}>
//                     <Breadcrumb></Breadcrumb>
//                 </Grid>
//                 <Grid item xs={12} md={12}>
//                     <FilterResult />
//                 </Grid>
//             </Grid>
//         </React.Fragment>
//     )
// }

import { useEffect, useState } from 'react';
// @mui
import { Button, Container, Stack } from '@mui/material';

// mock
import ProductFilterSidebar from '../components/ProductsPage/ProductFilterSidebar';
import ProductSort from '../components/ProductsPage/ProductSort';
import ProductList from '../components/ProductsPage/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../actions/product.actions';

// ----------------------------------------------------------------------

export const ProductsPage = () => {

    const { products, pending, totalProduct, error } = useSelector((reduxData) => reduxData.productReducers);

    console.log(products)
    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        dispatch(getAllProduct(rowsPerPage, page))
    }, [rowsPerPage, page]);

    // const handleChangeRowsPerPage = (event) => {
    //     setPage(0);
    //     setRowsPerPage(parseInt(event.target.value, 10));
    // };

    // const handleChangePage = (event, newPage) => {
    //     setPage(newPage);
    // };

    const [openFilter, setOpenFilter] = useState(false);

    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };

    return (
        <Container mt={{xs:2,sm:10,md:10}} mb={{xs:2,sm:10,md:10}}>
            <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ m: 5 }}>
                <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                    <ProductFilterSidebar
                        openFilter={openFilter}
                        onOpenFilter={handleOpenFilter}
                        onCloseFilter={handleCloseFilter}
                    />
                    <ProductSort />
                </Stack>
            </Stack>
            <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                <ProductList products={products} />
            </Stack>
            <Stack direction="column" justifyContent="center" alignItems="center" sx={{m:10}}>
                <Button variant='contained' sx={{backgroundColor:"#222222"}} onClick={() => setRowsPerPage(rowsPerPage + 5)}>
                    MORE
                </Button>
            </Stack>
        </Container>
    );
}
