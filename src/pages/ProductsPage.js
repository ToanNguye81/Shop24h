import { Grid } from "@mui/material"
import React from "react"
import { FilterBar } from "../components/ProductsPage/FilterBar"
import { FilterResult } from "../components/ProductsPage/FilterResult"
import { Breadcrumb } from "../components/BreadCrumb"

export const ProductsPage = () => {
    return (
        <React.Fragment>
            <Grid item xs={4} md={3} pt={10}>
                    <FilterBar />
                </Grid>
            <Grid container justifyContent={"center"} spacing={2} mt={3} pl={10} pr={2} mb={0} pb={0}>
                <Grid item xs={12} md={12}>
                    <Breadcrumb></Breadcrumb>
                </Grid>
                <Grid item xs={12} md={12}>
                    <FilterResult />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}