import * as React from 'react';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Grid, IconButton, Tooltip } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router-dom';
const StyledProductImg = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
});

// ----------------------------------------------------------------------

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: "30%",
        },
        '& .MuiImageMarked-root': {
            opacity: "0",
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
        '& .IconCart': {
            opacity: "100%",
        },
    },
}));

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: "0%",
    transition: theme.transitions.create('opacity'),
}));


export default function CardButton({ imageUrl, productId }) {
    const navigate=useNavigate()

    return (
        <ImageButton
            focusRipple
        >
            <StyledProductImg src={imageUrl} />
            <ImageBackdrop
                className="MuiImageBackdrop-root" />
            <Image>
                <Grid container 
                direction="row" 
                justifyContent="space-evenly"
                alignItems="center">
                    <Tooltip title="Detail">
                        <IconButton onClick={()=>(navigate(`/products/${productId}`))}
                            className='IconCart' sx={{ color: "white", border: "4px solid white", opacity: "0" }}>
                            <SearchOutlinedIcon
                                className='IconCart' sx={{ color: "white", opacity: "0" }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Buy Now">
                        <IconButton
                            className='IconCart' sx={{ color: "white", border: "4px solid white", opacity: "0" }}>
                            <AttachMoneyIcon
                                className='IconCart' sx={{ color: "white", opacity: "0" }} />
                        </IconButton>
                    </Tooltip >
                    <Tooltip title="Add To Cart">
                        <IconButton
                            className='IconCart' sx={{ color: "white", border: "4px solid white", opacity: "0" }}>
                            <AddShoppingCartIcon
                                className='IconCart' sx={{ color: "white", opacity: "0" }} />
                        </IconButton>
                    </Tooltip >
                </Grid>
            </Image>
        </ImageButton>
    );
}
