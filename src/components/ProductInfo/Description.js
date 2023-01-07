import { Grid } from "@mui/material"
import React from "react"
import LatestProducts from "../HomePage/LatestProducts"

export const Description=()=>{return(

    <React.Fragment>
        <Grid>
            <h1>Sản phẩm liên quan Demo nè:</h1>
        </Grid>
        <LatestProducts/>
    </React.Fragment>
        )
}