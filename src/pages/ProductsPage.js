
import { useEffect, useState } from 'react';
// @mui
import { Container, Stack } from '@mui/material';
// mock
import ProductFilter from '../components/ProductsPage/ProductFilter';
import ProductSort from '../components/ProductsPage/ProductSort';
import ProductList from '../components/ProductsPage/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct, setPage } from '../actions/product.actions';
import * as React from 'react';
import Pagination from '@mui/material/Pagination';


// ----------------------------------------------------------------------

export const ProductsPage = () => {

    const { products, pending, totalProduct, error, category,
        limit, page, sortBy, sortOrder, gender, brand, minPrice, maxPrice,loadHomePage } = useSelector((reduxData) => reduxData.productReducers);

    const dispatch = useDispatch();

    const totalPages = Math.ceil(totalProduct / limit)

    useEffect(() => {
        dispatch(getAllProduct({ limit, page, sortBy, sortOrder, gender, brand, minPrice, maxPrice, category }))
    }, [page, sortBy, sortOrder, gender, brand, minPrice, maxPrice, category]);


    const handleChangePage = (event, value) => {
        dispatch(setPage(value - 1));
    };

    useEffect(() => {
        dispatch(setPage(0))
    }, [gender, brand, minPrice, maxPrice, category])

    const [openFilter, setOpenFilter] = useState(false);

    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };

    return (
        <Container mt={{ xs: 2, sm: 10, md: 10 }} mb={{ xs: 2, sm: 10, md: 10 }}>
            <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ m: 5 }}>
                <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                    <ProductFilter

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
            <Stack direction="row" justifyContent="center" alignItems="center" sx={{ mt: 5, mb: 5 }}>
                <Pagination
                    count={totalPages}
                    page={page + 1}
                    onChange={handleChangePage}
                    variant="outlined" color="secondary"
                />
            </Stack>
        </Container>
    );
}
