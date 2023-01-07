import { Grid } from "@mui/material"
import React from "react"
import { Result } from "../components/BrandPage/Result"
import { SortBar } from "../components/BrandPage/SortBar"
import News from "../components/HomePage/News"


export const Brand = () => {
    return (
        <React.Fragment>
            <Grid container mt={10}>
            <SortBar />
                <Grid item>
                <Result />
                </Grid>
                <Grid item>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}