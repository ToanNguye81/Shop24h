import { Container, Grid, Typography } from "@mui/material"
import React from "react"

export const ImageProduct = ({ product }) => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ border: "none", p: 0 }}>
            <img src={product.imageUrl} alt="product-img" style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "20px"
            }}
            />
            {/* <Typography variant="h5" sx={{ fontWeight: "bold", marginTop: "16px" }}>{product.name}</Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>{product.description}</Typography> */}
        </Grid>
    )
}