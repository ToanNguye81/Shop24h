import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '../common/Typography';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllProduct } from '../../actions/product.actions';
import { enqueueSnackbar } from 'notistack';

const ImageBackdrop = styled('div')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: '#000',
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '50vh',
    [theme.breakpoints.down('md')]: {
        width: '100% !important',
        height: 150,
    },
    '&:hover': {
        zIndex: 1,
    },
    '&:hover .imageBackdrop': {
        opacity: 0.15,
    },
    '&:hover .imageMarked': {
        opacity: 0,
    },
    '&:hover .imageName': {
        border: '4px solid currentColor',
    },
    '& .imageName': {
        position: 'relative',
        padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
    },
    '& .imageMarked': {
        height: 5,
        width: 18,
        background: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));



export const LoadProduct = ({ category, title, widthDivide,limit }) => {

    const dispatch = useDispatch()
    const [products, setProducts] = React.useState(null)
    
    useEffect(() => {
        handleLoadProduct(category,limit)
    }, [])

    const handleLoadProduct = async (paramCategory,paramLimit) => {
        try {
            const {products} = await dispatch(getAllProduct({ category: paramCategory,limit:paramLimit }))
            setProducts(products)
        } catch (error) {
            enqueueSnackbar("There something's wrong")
        }
    }

    return (
        <React.Fragment>
            <Box component="section" sx={{ mt: 8, mb: 4 }}>
                <Typography variant="h4" marked="center" align="center" component="h2" mb={8} >
                    {title} products
                </Typography>
            </Box>
            {products ? <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap', spacing: 6 }}>
                {products && products.map((product, index) => (
                    <ImageIconButton
                        key={product.name}
                        style={{
                            width: widthDivide[index],
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center 40%',
                                backgroundImage: `url(${product.imageUrl})`,
                            }}
                        />
                        <ImageBackdrop className="imageBackdrop" />
                        <Box
                            sx={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'common.white',
                            }}
                        >
                            <Typography
                                component="h3"
                                variant="h6"
                                color="inherit"
                                className="imageName"
                            >
                                {product.name}
                                <div className="imageMarked" />
                            </Typography>
                        </Box>
                    </ImageIconButton>
                ))}
            </Box> : null}
        </React.Fragment>
    )
}