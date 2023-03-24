import { Grid, Typography, Box } from "@mui/material"
import HighQualityIcon from '@mui/icons-material/HighQuality';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import WifiCallingIcon from '@mui/icons-material/WifiCalling';
export const Intro = () => {
    return (
        <Grid container 
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            sx={{ display: {md: 'flex' }, backgroundColor: "#F2F2F2", pt:4,pb:4 }}
            >
            <Grid item xs={12} md={3}
                container
                sx={{ textAlign: 'center' }}
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <HighQualityIcon sx={{ fontSize: 40, color: "inherit" }} />
                <Typography variant="h5" sx={{ fontWeight: 400 }}>100% AUTHENTIC</Typography>
                <Typography variant="h6" sx={{ color: "Black", fontWeight: 400 }}>Genuine commitment</Typography>
                <Typography variant="p" sx={{ color: "#2c3e50", fontWeight: 300 }}>Guaranteed genuine products from Europe</Typography>               
            </Grid>
            <Grid item xs={12} md={3}
                sx={{ textAlign: 'center' }}
            >
                <DeliveryDiningIcon sx={{ fontSize: 40, color: "inherit" }} />
                <Typography variant="h5" sx={{ fontWeight: 400 }}>Express delivery</Typography>
                <Typography variant="h6" sx={{ color: "Black", fontWeight: 400 }}>Delivery in 24HOURS</Typography>
                <Typography variant="p" sx={{ color: "#2c3e50", fontWeight: 300 }}>Express delivery 1 hour to receive goods within HCM City</Typography>               
            </Grid>
            <Grid item xs={12} md={3}
                sx={{ textAlign: 'center' }}
            >
                <WifiCallingIcon sx={{ fontSize: 40, color: "inherit" }} />
                <Typography variant="h5" sx={{ fontWeight: 400 }}>Supporting 24/24</Typography>
                <Typography variant="h6" sx={{ color: "Black", fontWeight: 400 }}>Supporting 24/24</Typography>
                <Typography variant="p" sx={{ color: "#2c3e50", fontWeight: 300 }}>Call now 0333.447.111</Typography>               
            </Grid>
        </Grid>
    )
}