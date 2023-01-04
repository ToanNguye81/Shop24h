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
            sx={{ display: {md: 'flex' }, backgroundColor: "#bdc3c7", pt:4,pb:4 }}
            >
            <Grid item xs={12} md={4}
                sx={{ textAlign: 'center' }}
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <HighQualityIcon sx={{ fontSize: 80, color: "#c0392b" }} />
                <Typography variant="h5" sx={{ color: "#d35400", fontFamily: "Papyrus", fontWeight: 400 }}>100% AUTHENTIC</Typography>
                <Typography variant="h6" sx={{ color: "Black", fontWeight: 400 }}>Cam kết chính hãng</Typography>
                <Typography variant="p" sx={{ color: "#2c3e50", fontWeight: 300 }}>Cam kết sản phẩm chính hãng từ Châu Âu, Châu Mỹ...</Typography>               
            </Grid>
            <Grid item xs={12} md={4}
                sx={{ textAlign: 'center' }}
            >
                <DeliveryDiningIcon sx={{ fontSize: 80, color: "#c0392b" }} />
                <Typography variant="h5" sx={{ color: "#d35400", fontFamily: "Papyrus", fontWeight: 400 }}>Express delivery</Typography>
                <Typography variant="h6" sx={{ color: "Black", fontWeight: 400 }}>Giao hàng trong 24H</Typography>
                <Typography variant="p" sx={{ color: "#2c3e50", fontWeight: 300 }}>SHIP hỏa tốc 1h nhận hàng trong nội thành HCM</Typography>               
            </Grid>
            <Grid item xs={12} md={4}
                sx={{ textAlign: 'center' }}
            >
                <WifiCallingIcon sx={{ fontSize: 80, color: "#c0392b" }} />
                <Typography variant="h5" sx={{ color: "#d35400", fontFamily: "Papyrus", fontWeight: 400 }}>Supporting 24/24</Typography>
                <Typography variant="h6" sx={{ color: "Black", fontWeight: 400 }}>Hố trợ 24/24</Typography>
                <Typography variant="p" sx={{ color: "#2c3e50", fontWeight: 300 }}>Gọi ngay 0333.447.111</Typography>               
            </Grid>
        </Grid>
    )
}