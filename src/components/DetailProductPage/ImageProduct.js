import { Container, Grid, Typography } from "@mui/material"
import React from "react"

export const ImageProduct = ({ product }) => {
    return (
        <Container sx={{ minHeight: 450, backgroundColor: "#f9f9f9", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", padding: "16px" }}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ border: "none" }}>
                <img src={product.imageUrl} alt="product-img"
                    style={{ maxWidth: "100%", height: "auto", objectFit: "cover", borderRadius: "4px" }} />
                <Typography variant="h5" sx={{ fontWeight: "bold", marginTop: "16px" }}>{product.name}</Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>{product.description}</Typography>
            </Grid>
        </Container>
    )
}