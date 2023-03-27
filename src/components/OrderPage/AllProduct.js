import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Alert, Box, ButtonGroup, Grid, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart, updateQuantity } from '../../actions/cart.actions';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const MyButton = styled.button`
height:45px;
width:45px;
border:0.1px solid #E6E6E6;
color:#555555;
background-color:white;
`

const MyTextBox = styled.input`
height:45px;
width:45px;
color:#555555 ;
border:none;
border-top:0.1px solid #E6E6E6;
border-bottom:0.1px solid #E6E6E6;
background-color:#F0F0F0;
text-align:center;
font-family: "Poppins";
`

export const AllProduct = ({ cart }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleIncreaseQuantity = (productId) => {
        dispatch(increaseQuantity(productId))
    }

    const handleDecreaseQuantity = (productId) => {
        dispatch(decreaseQuantity(productId))
    }

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleUpdateQuantity = (productId, newQuantity) => {

        dispatch(updateQuantity(productId, newQuantity));
    };

    return (
        <Box>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={11} md={12} >
                    {cart[0] ?
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center"><h5><strong>Products</strong></h5></TableCell>
                                        <TableCell align="center"><h5><strong>Price</strong></h5></TableCell>
                                        <TableCell align="center"><h5><strong>Quantity</strong></h5></TableCell>
                                        <TableCell align="center"><h5><strong>Total &nbsp;($)</strong></h5></TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {cart.map((item, index) => (
                                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell component="th" scope="item" width="25%">
                                                <Grid container direction="column" justifyContent="flex-start" alignItems="center">
                                                    <img src={item.product.imageUrl} width="100" />
                                                    <Grid item textAlign="center">
                                                        <strong>{item.product.name}</strong>
                                                    </Grid>
                                                </Grid>
                                            </TableCell>
                                            <TableCell align="center" width="25%">$ {item.product.promotionPrice}</TableCell>
                                            <TableCell align="center" width="25%">
                                                <ButtonGroup>
                                                    <MyButton onClick={() => handleDecreaseQuantity(item.product._id)}><RemoveIcon /></MyButton>
                                                    <MyTextBox
                                                        variant="outlined"
                                                        size="small"
                                                        value={item.quantity === null ? "" : item.quantity}
                                                        onChange={(event) => {
                                                            const value = event.target.value;
                                                            const isValidInput = /^[1-9]\d*$/.test(value) || value === '';
                                                            if (isValidInput) {
                                                                handleUpdateQuantity(item.product._id, value === "" ? null : parseInt(value));
                                                            }
                                                        }}
                                                        inputProps={{ min: 1 }}
                                                    />
                                                    <MyButton onClick={() => handleIncreaseQuantity(item.product._id)}><AddIcon /></MyButton>
                                                    <MyButton onClick={() => handleRemoveFromCart(item.product._id)} ><DeleteOutlineOutlinedIcon variant="outlined" sx={{color:"red"}}/></MyButton>
                                                </ButtonGroup>
                                            </TableCell>
                                            <TableCell align="center" width="25%">$ {item.product.promotionPrice * item.quantity}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        :
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert variant="filled" severity="error" sx={{ bgcolor: "#222222", color: "#fff" }}>You have no items in your shopping cart</Alert>
                        </Stack>

                    }
                </Grid>
            </Grid>
        </Box>

    );
}
