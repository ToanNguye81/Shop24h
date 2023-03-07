import { CircularProgress, Grid, Pagination, TextField } from "@mui/material"
import React from "react"
import { FilteredCard } from "../FilteredCard";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { changePagination, fetchProducts } from "../../actions/product.actions";
import { PendingActions } from "@mui/icons-material";

export const FilterResult = () => {
//   const dispatch = useDispatch();

//   const limit = 12;

//   state.pending = false;
//   state.totalProduct = action.totalProduct;
//   state.products = action.products;
//   const {pending,
// totalProduct,
// products}=useSelector((reduxData) => reduxData.productReducers);


  // const { brand,
  //   minPrice,
  //   maxPrice,
  //   ordinal,
  //   filteredProducts,
  //   pending,
  //   currentPage,
  //   totalProduct } = useSelector((reduxData) => reduxData.productReducers);

  // const noPage = Math.ceil(totalProduct / limit);
  // const page=currentPage-1;
  // const condition={}
  // const sortBy=""
  // const sortOrder=""


  // useEffect(() => {
  //   dispatch(fetchProducts(limit, page, condition,sortBy, sortOrder));
  // }, [currentPage, page, condition, sortBy, sortOrder]);

  // const onChangePagination = (event, value) => {
  //   dispatch(changePagination(value));
  // }

  const dispatch = useDispatch();
  // const [open, setOpen] = useState(null);
  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(5);
  const { products, pending, totalProduct } = useSelector((reduxData) => reduxData.productReducers);

  useEffect(() => {
    dispatch(fetchProduct(rowsPerPage, page));
  }, [rowsPerPage, page]);


  // const handleChangeRowsPerPage = (event) => {
  //   setPage(0);
  //   setRowsPerPage(parseInt(event.target.value, 10));
  // };
  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };
    const onChangePagination = (event, value) => {
    dispatch(changePagination(value));
  }

  return (
      pending? <PendingActions/>:
        <React.Fragment>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }} mt={0}>
            <FilteredCard ProductsData={products} />
          </Grid>
          <Grid item md={12} sm={12} lg={12} xs={12} mt={5} mb={5}>
            <TextField></TextField>
            <Pagination count={totalProduct/10} defaultPage={page-1} onChange={onChangePagination} />
          </Grid>
        </React.Fragment>
  )
}