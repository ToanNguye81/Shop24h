import React from "react";
// import {  SearchRounded } from "@mui/icons-material"
import { Grid, Typography, Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { changeBrand,changeOrdinal,changePrice } from "../../actions/product.actions";

export const FilterBar = () => {

    const dispatch = useDispatch();
    

    // const [ordinal, setOrdinal] = React.useState('');
    const [openBrand, setOpenBrand] = React.useState(false);
    const [openPrice, setOpenPrice] = React.useState(false);
    const [openOrdinal, setOpenOrdinal] = React.useState(false);

    const {brand,
        minPrice,
        ordinal } = useSelector((reduxData) => reduxData.productReducers);
    

    const handleBrandChange = (event) => {
        dispatch(changeBrand(event.target.value))
    };
    const handlePriceChange = (event) => {
        dispatch(changePrice(event.target.value))
    };
    const handleOrdinalChange = (event) => {
        dispatch(changeOrdinal(event.target.value))
    };

    const handleClose = () => {
        setOpenBrand(false);
        setOpenPrice(false);
        setOpenOrdinal(false);
    };

    const handleOpenBrand = () => {
        setOpenBrand(true);
        
    };
    const handleOpenPrice = () => {
        setOpenPrice(true);
    };
    const handleOpenOrdinal = () => {
        setOpenOrdinal(true);
    };
    
    return (
        <Grid container
            direction="row"
            justifyContent="space-around"
            alignItems="flex-end"
            spacing={3}
            sx={{ display: { md: 'flex' }, backgroundColor: "#bdc3c7", pt: 6, pb: 4, pl:10 }}>
            <Grid item xs={12} md={3}
                sx={{ textAlign: 'start' }}
                direction="column"
                justifyContent="start"
                alignItems="start"
            >
                <Typography variant="h5" sx={{ color: "#d35400", fontFamily: "Papyrus", fontWeight: 400 }}>Chọn nhãn hiệu</Typography>
                <FormControl sx={{ m: 1, minWidth: "90%" }}>
                    <InputLabel id="demo-controlled-open-select-label">Brand</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={openBrand}
                        onClose={handleClose}
                        onOpen ={handleOpenBrand}
                        value={brand}
                        label="Brand"
                        onChange={handleBrandChange}
                    >
                        <MenuItem value={""}>Tất cả</MenuItem>
                        <MenuItem value={"NIKE"}>NIKE</MenuItem>
                        <MenuItem value={"ADIDAS"}>ADIDAS</MenuItem>
                        <MenuItem value={"JORDAN"}>JORDAN</MenuItem>
                        <MenuItem value={"YEEZY"}>YEEZY</MenuItem>
                        <MenuItem value={"ORTHER"}>ORTHER</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={3}
                sx={{ textAlign: 'start' }}
            >
                <Typography variant="h5" sx={{ color: "#d35400", fontFamily: "Papyrus", fontWeight: 400 }}>Chọn khoảng giá</Typography>
                <FormControl sx={{ m: 1, minWidth: "90%" }}>
                    <InputLabel id="demo-controlled-open-select-label">Price</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={openPrice}
                        onClose={handleClose}
                        onOpen={handleOpenPrice}
                        value={minPrice}
                        label="Price"
                        onChange={handlePriceChange}
                    >
                         <MenuItem value={""}>Tất cả</MenuItem>
                        <MenuItem value={0}>Dưới 100$</MenuItem>
                        <MenuItem value={100}>100$-200$</MenuItem>
                        <MenuItem value={200}>200$-300$</MenuItem>
                        <MenuItem value={300}>300$-400$</MenuItem>
                        <MenuItem value={400}>Trên 400$</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={3}
                sx={{ textAlign: 'start' }}
            >
                <Typography variant="h5" sx={{ color: "#d35400", fontFamily: "Papyrus", fontWeight: 400 }}>Sắp xếp theo</Typography>
                <FormControl sx={{ m: 1, minWidth: "90%" }}>
                    <InputLabel id="demo-controlled-open-select-label">Ordinal</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={openOrdinal}
                        onClose={handleClose}
                        onOpen={handleOpenOrdinal}
                        value={ordinal}
                        label="Ordinal"
                        onChange={handleOrdinalChange}
                    >
                        <MenuItem value={""}>None</MenuItem>
                        <MenuItem value={"asc"}>Tên A-Z</MenuItem>
                        <MenuItem value={"desc"}>Tên Z-A</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            {/* <Grid item xs={12} md={3} sx={{ textAlign: 'start' }} mb={1}>
                <Button sx={{ backgroundColor: "#FCD603", color: "black" }} >
                    <SearchRounded sx={{ fontSize: 50, color: "#c0392b" }} />
                    TÌM GIÀY NHANH
                </Button>
            </Grid> */}
        </Grid>
    )
}

