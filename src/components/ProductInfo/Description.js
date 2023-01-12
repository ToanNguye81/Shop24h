import { Grid } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux";

export const Description=()=>{
    const { detailProduct } = useSelector((reduxData) => reduxData.detailReducer);
    return(
    <React.Fragment>
        <Grid>
            <h1>Tin tức bài viết: </h1>
        </Grid>
    </React.Fragment>
        )
}