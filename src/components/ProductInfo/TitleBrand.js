import { Grid, Typography} from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import Products from "../../database_sample/productsData.json"
export const TitleBrand = () => {
    const dispatch =useDispatch();
    const { productId } = useSelector((reduxData) => reduxData.detailReducer);
    const tryData =     Products.find(({ id }) => id === productId);
    return (
        <Grid container 
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            sx={{ display: {md: 'flex' }, backgroundColor: "#bdc3c7",pt:15,pb:4 }}
            >
            <Grid item xs={12} md={4}
                sx={{ textAlign: 'center' }}
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="h2" sx={{ color: "#d35400", fontFamily: "Papyrus", fontWeight: 400 }}>
                    {tryData.brand}
                    </Typography>
            </Grid>
        </Grid>
    )
}