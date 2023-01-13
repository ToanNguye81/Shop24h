import { Grid, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
export const TitleBrand = ({detailProduct}) => {
    // const { detailProduct } = useSelector((reduxData) => reduxData.detailReducer);
    return (
        <Grid container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            sx={{ display: { md: 'flex' }, backgroundColor: "#222222", pt: 15, pb: 4 }}
        >
            <Grid item xs={12} md={4}
                sx={{ textAlign: 'center' }}
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="h2" sx={{ color: "#FFFFFF", fontFamily: "Poppins-Regular", fontWeight: 400 }}>
                    {detailProduct.brand}
                </Typography>
            </Grid>
        </Grid>
    )
}