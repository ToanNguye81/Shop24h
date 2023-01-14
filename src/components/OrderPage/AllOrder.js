import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Products from "../../database_sample/productsData.json"
import { Button, ButtonGroup, Grid, IconButton, TableFooter, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ProductList } from '../../pages/ProductList';
import { useNavigate } from 'react-router-dom';
import { fontWeight } from '@mui/system';
import styled from 'styled-components';

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
background-color:#F0F0F0
`

export const AllOrder = () => {


    const navigate = useNavigate()
    const onBtnBuyClick = () => {
        navigate("/products")
    }

    return (
        <React.Fragment>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={11} md={12} >
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
                                {Products.slice(4, 13).map((item, index) => (
                                    <TableRow
                                        key={item.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="item" width="25%">
                                            <Grid container
                                                direction="column"
                                                justifyContent="flex-start"
                                                alignItems="center">
                                                <img src={item.imageUrl} width="100" />
                                                <Grid item textAlign="center">
                                                <strong>{item.name}</strong>
                                                </Grid>
                                            </Grid>
                                        </TableCell>
                                        <TableCell align="center" width="25%">{item.buyPrice}</TableCell>
                                        <TableCell align="center" width="25%">
                                            <ButtonGroup>
                                                <MyButton><AddIcon /></MyButton>
                                                <MyTextBox></MyTextBox>
                                                <MyButton><RemoveIcon /></MyButton>
                                            </ButtonGroup>
                                        </TableCell>
                                        <TableCell align="center" width="25%">{item.promotionPrice}</TableCell>
                                    </TableRow>
                                ))}
                                <TableRow>
                                    <Grid container direction="column">
                                   <TextField placeholder="Coupon Code"></TextField>
                                   <Button>Apply coupon</Button>
                                   <Button>Update Cart</Button>
                                    </Grid>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
            <Grid container item sx={{ mt: 5, mb: 5, display: { xs: 12, md: 8 } }}
                direction="row"
                justifyContent="center"
                alignItems="stretch">
                <Button onClick={onBtnBuyClick} class="btn col-sm-2 btn-warning rounded-pill pb-3 pt-3">Mua tiếp</Button>
                <Button class="btn col-sm-2 btn-danger rounded-pill pb-3 pt-3">Đặt hàng</Button>
            </Grid>
        </React.Fragment>

    );
}