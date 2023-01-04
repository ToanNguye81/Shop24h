import { Grid } from "@mui/material"
import React from "react"
import { Result } from "../components/Body/BrandPage/Result"
import { SortBar } from "../components/Body/BrandPage/SortBar"
import News from "../components/Body/HomePage/News"


export const Brand = () => {
    return (
        <React.Fragment>
            <SortBar />
            <Grid container>
                <Grid item>
                <Result />
                </Grid>
                <Grid item>
                <News />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}