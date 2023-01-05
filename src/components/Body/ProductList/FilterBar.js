import { Box, FormLabel, Grid} from "@mui/material"
import React from "react"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import ColorLensIcon from '@mui/icons-material/ColorLens';


const brandFilter = ["Nike", "Adidas", "Jordan", "Sneaker", "Yezzy", "All Product"]
const colorFilter =["Red","Green","Black","Orange", "White"]
const priceFilter =["100-200","200-300","300-400","400-500", ">500"]


export const FilterBar = () => {

    const [state, setState] = React.useState({
        gilad: false,
        jason: false,
        antoine: false,
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

    return (
        <React.Fragment>
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="stretch"
                pl={4}
            >
                <Box sx={{ display: 'flex' }}>
                    <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
                        <FormLabel component="legend" sx={{color:"#8e44ad"}}>
                            <PriceChangeIcon/>
                            Price
                            </FormLabel>
                        <FormGroup>
                        {priceFilter.map((value,index)=>
                            <FormControlLabel
                            control={<Checkbox onChange={handleChange} name={value} />}
                            label={value + " ($)"}
                            />
                            )}
                        </FormGroup>
                    </FormControl>
                </Box>
                
                <Box sx={{ display: 'flex' }}>
                    <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
                        <FormLabel component="legend" sx={{color:"green"}}><LoyaltyIcon/>Brand</FormLabel>
                        <FormGroup>
                            {brandFilter.map((value,index)=>
                            <FormControlLabel
                            control={<Checkbox onChange={handleChange} name={value} />}
                            label={value}
                            />
                            )}
                        </FormGroup>
                    </FormControl>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
                        <FormLabel component="legend" sx={{color:"red"}}><ColorLensIcon/>Color</FormLabel>
                        <FormGroup>
                            {colorFilter.map((value,index)=>
                            <FormControlLabel
                            control={<Checkbox onChange={handleChange} name={value} />}
                            label={value}
                            />
                            )}
                        </FormGroup>
                    </FormControl>
                </Box>
               


            </Grid>
        </React.Fragment>

    )
}

