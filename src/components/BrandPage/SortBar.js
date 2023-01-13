import React from "react"
import { Button, Grid, Typography } from "@mui/material"
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MouseTwoToneIcon from '@mui/icons-material/MouseTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import SelectSize from "./SizeField";

export const SortBar=()=>{
    return(
        <React.Fragment>
            <Grid container 
            direction="row"
            justifyContent="space-around"
            alignItems="start"
            sx={{ display: {md: 'flex' }, backgroundColor: "#222222",pl:20,pt:5}}
            >

            <Grid item xs={12} md={3}
                sx={{ textAlign: 'start' }}
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <FullscreenExitIcon sx={{ fontSize: 80, color: "#FFFFFF" }}/>
                <Typography variant="h5" sx={{ color: "#FFFFFF", fontFamily: "Poppins-Regular", fontWeight: 400 }}>Choose Size</Typography>
                <SelectSize/>
            </Grid>

            <Grid item xs={12} md={3}
                sx={{ textAlign: 'start' }}
            >
                <AttachMoneyIcon sx={{ fontSize: 80, color: "#FFFFFF" }} />
                <Typography variant="h5" sx={{ color: "#FFFFFF", fontFamily: "Poppins-Regular", fontWeight: 400 }}>Choose Price</Typography>
                <SelectSize/>
            </Grid>

            <Grid item xs={12} md={3}
                sx={{ textAlign: 'start' }}
            >
                <SortByAlphaIcon sx={{ fontSize: 80, color: "#FFFFFF" }} />
                <Typography variant="h5" sx={{ color: "#FFFFFF", fontFamily: "Poppins-Regular", fontWeight: 400 }}>Sort By</Typography>
                <SelectSize />
            </Grid>
            <Grid item xs={12} md={3}
                sx={{ textAlign: 'start' }}
            >
                <MouseTwoToneIcon sx={{ fontSize: 80, color: "#FFFFFF" }} />
                <Typography variant="h5" sx={{ color: "#FFFFFF", fontFamily: "Poppins-Regular", fontWeight: 400}}>Supporting 24/24</Typography>
                <Button variant="contained" sx={{mt:3,backgroundColor:"#FFFFFF"}}>
                <SearchTwoToneIcon sx={{ fontSize: 40, color: "#2c3e50" }} />
                    Tìm giày nhanh 
                </Button>
            </Grid>
        </Grid>
        </React.Fragment>
    )
}