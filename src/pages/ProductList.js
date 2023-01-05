import { Grid } from "@mui/material"
import React from "react"
import { FilterBar } from "../components/Body/ProductList/FilterBar"
import { FilterResult } from "../components/Body/ProductList/FilterResult"
import { PaginationBar } from "../components/Body/ProductList/Pagination"
import { Breadcrumb } from "../components/BreadCrumb"

export const ProductList = () => {
    return (
        <React.Fragment>
            <Grid container spacing={2} mt={12} pl={10} pr={2} mb={0} pb={0}>
                <Grid item xs={12} md={12} mt={5} pl={6}>
                    <Breadcrumb></Breadcrumb>
                </Grid>
                <Grid item xs={4} md={3}>
                    <FilterBar />
                </Grid>
                <Grid item xs={8} md={9}>
                    <FilterResult />
                    <Grid container justifyContent={"center"}>
                    <PaginationBar/>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}