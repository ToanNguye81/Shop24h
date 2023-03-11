import { Box } from "@mui/material";
import React from "react";
import DiscountProducts from "../components/HomePage/DiscountProducts";
import { HeadSwiper } from "../components/HomePage/HeadSwiper";
import { Intro } from "../components/HomePage/Introduce";
import LatestProducts from "../components/HomePage/LatestProducts"
import TrendingProducts from "../components/HomePage/TrendingProducts";
import { ViewAll } from "../components/HomePage/ViewAll";

function Body() {

    return (
        <React.Fragment>
            <Box>
                <HeadSwiper />
                <Intro />
                <LatestProducts />
                <TrendingProducts />
                <DiscountProducts />
                <ViewAll />
            </Box>
        </React.Fragment>
    )
}
export default Body;