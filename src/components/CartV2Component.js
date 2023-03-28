import { useSelector, useDispatch } from 'react-redux';
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    IconButton,
    TextField,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

import { RemoveShoppingCart } from '@mui/icons-material';
import {
    addToCart,
    increaseQuantity,
    removeFromCart,
    decreaseQuantity,
    updateQuantity,
} from '../actions/cart.actions';
import { useEffect, useState } from 'react';
export const CartV2Component = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.productReducers);
    const { cart } = useSelector((state) => state.cartReducers);
    const [newQuantities, setNewQuantities] = useState(cart.map(item => item.quantity));

    useEffect(() => {
        setNewQuantities(cart.map(item => item.quantity));
    }, [cart]);

    const handleQuantityChange = (productId, index) => (event) => {
        const value = parseInt(event.target.value, 10);
        setNewQuantities(value)
        if (value > 0) {
            dispatch(updateQuantity(productId, value));
        }
    }

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleIncreaseQuantity = (productId) => {
        dispatch(increaseQuantity(productId));
    };

    const handleDecreaseQuantity = (productId) => {
        dispatch(decreaseQuantity(productId))
    }
    return (
        <Grid container spacing={2}>
            {products.map((product, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                            component="img"
                            image={product.imageUrl}
                            alt={product.name}
                            height="200"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography variant="h5" component="h2" noWrap>
                                {product.name}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                {product.price}
                            </Typography>
                        </CardContent>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleAddToCart(product)}
                        >
                            <AddShoppingCartIcon />
                            Add to Cart
                        </Button>
                    </Card>
                </Grid>
            ))}
            <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                    Cart
                </Typography>
                {cart.length === 0 ? (
                    <Typography>Your cart is empty.</Typography>
                ) : (
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                <Grid container alignItems="center" spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="subtitle1">
                                            {item.product.name} - {item.product.price}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <TextField
                                            variant="outlined"
                                            size="small"
                                            type="number"
                                            // value={item.quantity === null ? "" : item.quantity}
                                            // onChange={(event) => {
                                            //     const value = event.target.value;
                                            //     const isValidInput = /^[1-9]\d*$/.test(value) || value === '';
                                            //     if (isValidInput) {
                                            //       handleUpdateQuantity(item.product._id, value === "" ? null : parseInt(value));
                                            //     }
                                            //   }}
                                            value={newQuantities[index]}
                                            onChange={handleQuantityChange(item.product._id, index)}
                                            inputProps={{ min: 0 }}
                                        />
                                        <Typography variant="subtitle1" component=""  onChange={handleQuantityChange(item.product._id, index)}>
                                            Quantity: {item.quantity}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <Grid container spacing={1}>
                                            <Grid item>
                                                <IconButton
                                                    size="small"
                                                    onClick={() => handleIncreaseQuantity(item.product._id)}
                                                >
                                                    <AddShoppingCartIcon fontSize="small" />
                                                </IconButton>
                                            </Grid>
                                            <Grid item>
                                                <IconButton
                                                    size="small"
                                                    onClick={() => handleDecreaseQuantity(item.product._id)}
                                                >
                                                    <RemoveShoppingCart />
                                                </IconButton>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <IconButton
                                                    size="small"
                                                    onClick={() => handleRemoveFromCart(item.product._id)}
                                                >
                                                    <DeleteIcon fontSize="small" />
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </li>
                        ))}
                    </ul>
                )
                }
            </Grid>
        </Grid>
    )
}
