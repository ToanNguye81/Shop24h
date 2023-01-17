import React from "react";
import { Grid, Typography, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { changeBrand,changeOrdinal,changeMinPrice,changeMaxPrice,changePagination } from "../../actions/product.actions";

export const FilterBar = () => {

    const dispatch = useDispatch();
    const [openBrand, setOpenBrand] = React.useState(false);
    const [openOrdinal, setOpenOrdinal] = React.useState(false);
    const {brand,minPrice,maxPrice,ordinal } = useSelector((reduxData) => reduxData.productReducers);
    

    const handleBrandChange = (event) => {
        dispatch(changeBrand(event.target.value))
    };
    const handleClose = () => {
        setOpenBrand(false);
        setOpenOrdinal(false);
    };
    const handleOpenBrand = () => {
        setOpenBrand(true);
    };
    const handleMinPriceChange=(event)=>{
        dispatch(changeMinPrice(event.target.value))
    };
    const handleMaxPriceChange=(event)=>{
        dispatch(changeMaxPrice(event.target.value))
    }
    const handleOpenOrdinal = () => {
        setOpenOrdinal(true);
    };
    const handleOrdinalChange = (event) => {
        dispatch(changeOrdinal(event.target.value))
    };
    
    return (
        <Grid container
            direction="row"
            justifyContent="space-around"
            alignItems="flex-end"
            spacing={3}
            sx={{ display: { md: 'flex' }, backgroundColor: "#F2F2F2",pb: 4, pl:10,mt:10 }}>
            <Grid item xs={12} md={3}
                sx={{ textAlign: 'start' }}
                direction="column"
                justifyContent="start"
                alignItems="start"
            >
                <Typography variant="h5" sx={{ fontFamily: "Roboto", fontWeight: 400 }}>Brand</Typography>
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
                <Typography variant="h5" sx={{ fontWeight: 400 }}>Price</Typography>
                  <TextField sx={{ mt:1,mb:1,ml:1,width: "45%" }} label="From...$"  value={minPrice} onChange={handleMinPriceChange}/>
                  <TextField sx={{mt:1,mb:1,mr:1,width: "45%" }} label="To...$" value={maxPrice} onChange={handleMaxPriceChange}/>
            </Grid>
            <Grid item xs={12} md={3}
                sx={{ textAlign: 'start' }}
            >
                <Typography variant="h5" sx={{ fontWeight: 400 }}>Sort By</Typography>
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
                        <MenuItem value={0}>Ngẫu nhiên</MenuItem>
                        <MenuItem value={1}>Giá từ thấp đến cao</MenuItem>
                        <MenuItem value={2}>Giá từ cao đến thấp</MenuItem>
                        <MenuItem value={3}>Tên A-Z</MenuItem>
                        <MenuItem value={4}>Tên Z-A</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    )
}

