import { Grid, Typography} from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export const TitleOrder = () => {
    return (
        <Grid container 
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            sx={{ display: {md: 'flex' }, backgroundColor: "#222222",pt:15,pb:4 }}
            >
            <Grid item xs={12} md={12}
                sx={{ textAlign: 'center' }}
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="h2" sx={{ color: "#d35400", fontFamily: "Poppins-Regular", fontWeight: 400 }}>
                   <AddShoppingCartIcon sx={{ fontSize: 80, color: "#c0392b" }}/> ==YOUR ORDER==<LocalShippingIcon sx={{ fontSize: 80, color: "#c0392b" }}/>
                    </Typography>
            </Grid>
        </Grid>
    )
}