import { CircularProgress, Grid, Pagination } from "@mui/material"
import React from "react"
import { FilteredCard } from "../FilteredCard";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { changePagination, fetchProducts } from "../../actions/product.actions";

// import filteredProducts from "../../database_sample/productsData.json"

export const FilterResult = () => {
  const dispatch = useDispatch();

  const limit = 10;

  const {brand,
    minPrice,
    maxPrice,
    ordinal,
    filteredProducts,
    pending,
    currentPage,
    totalProduct } = useSelector((reduxData) => reduxData.productReducers);

  const noPage = Math.ceil(totalProduct / limit);
  

  useEffect(() => {
    dispatch(fetchProducts(limit, currentPage,brand,minPrice,maxPrice,ordinal));
  }, [currentPage,brand,minPrice,maxPrice,ordinal]);

  const onChangePagination = (event, value) => {
    dispatch(changePagination(value));
  }


  return (
    <React.Fragment>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }} mt={0}>
        {pending ? null :
          <FilteredCard ProductsData={filteredProducts} />
        }
      </Grid>
      <Grid item md={12} sm={12} lg={12} xs={12} mt={5} mb={5}>
        <Pagination count={noPage} defaultPage={currentPage} onChange={onChangePagination} />
      </Grid>
    </React.Fragment>
  )
}