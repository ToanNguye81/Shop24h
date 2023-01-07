import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Products from "../../database_sample/productsData.json"
import { Button,  ButtonGroup, Grid, IconButton, TableFooter, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ProductList } from '../../pages/ProductList';
import { useNavigate } from 'react-router-dom';


export const AllOrder = () => {
    const navigate = useNavigate()
    const onBtnBuyClick=()=>{
        navigate("/products")
    }

    return (
        <React.Fragment>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12} md={9} >
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ backgroundColor: "#16a085" }}>
                                    <TableCell ><strong>Products</strong></TableCell>
                                    <TableCell align="right"><strong>Price</strong></TableCell>
                                    <TableCell align="center"><strong>Quantity</strong></TableCell>
                                    <TableCell align="right"><strong>Total &nbsp;($)</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Products.slice(4, 13).map((item, index) => (
                                    <TableRow
                                        key={item.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="item" width="25%">
                                            <img src={item.imageUrl} width="100" />
                                            <strong>{item.name}</strong>
                                        </TableCell>
                                        <TableCell align="right" width="25%">{item.buyPrice}</TableCell>
                                        <TableCell align="center" width="25%">
                                            <IconButton sx={{ backgroundColor: "green" }}>
                                                <AddIcon />
                                            </IconButton>
                                            <TextField sx={{ width: "40%", textAlign: "center" }} value="50" />
                                            <IconButton sx={{ backgroundColor: "red" }}>
                                                <RemoveIcon />
                                            </IconButton>
                                        </TableCell>
                                        <TableCell align="right" width="25%">{item.promotionPrice}</TableCell>
                                    </TableRow>
                                ))}
                                <TableRow>
                                    <TableCell align="left" colSpan={1}>
                                        Total
                                    </TableCell>
                                    <TableCell align="right" colSpan={4}>
                                    <strong>12322$</strong>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
            <Grid container item sx={{mt:5, mb:5 ,display:{xs:12, md:8}}}
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch">
                    <Button onClick={onBtnBuyClick} class="btn col-sm-2 btn-warning rounded-pill pb-3 pt-3">Mua tiếp</Button>
                    <Button class="btn col-sm-2 btn-danger rounded-pill pb-3 pt-3">Đặt hàng</Button>
                </Grid>
        </React.Fragment>

    );
}