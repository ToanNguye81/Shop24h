import * as React from 'react';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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
      border: '5px solid currentColor',
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


export default function CardButton({imageUrl}) {
    return (
        <ImageButton
            focusRipple
        >
            <StyledProductImg src={imageUrl} />
            <ImageBackdrop className="MuiImageBackdrop-root"/>
            <Image>
                <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                >
                    <AddShoppingCartIcon/>
                </Typography>
            </Image>
        </ImageButton>
    );
}
