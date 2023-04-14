import {
  TableRow,
  TableBody,
  CircularProgress,
  Grid,
  Table,
  TableCell,
  TableHead,
  IconButton,
  TableContainer,
  Collapse,
  Box,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useDispatch, useSelector } from "react-redux";
import { getAllOrderDetailOfOrder } from "../../actions/orderDetail.actions";

const TABLE_HEAD =
  [
    "Order Code",
    "Order Date",
    "Cost",
    "Recipient",
    "Phone",
    "Address",
    "Note",
    "Status",
    "Order Detail"
  ];

export const OrderTable = ({ orders, pending }) => {

  return (
    <React.Fragment>
      {pending ?
        <Grid item md={12} sm={12} lg={12} xs={12} textAlign="center">
          <CircularProgress />
        </Grid>
        :
        <TableContainer>
          <Table sx={{ minWidth: 200 }}>
            <TableHead>
              <TableRow key={"title"}>
                {TABLE_HEAD.map((title, index) => {
                  return (
                    <TableCell align="left" key={index}>
                      {title}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order, index) => (
                <Row key={index} row={index} order={order} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
    </React.Fragment>
  );
};

export const Row = ({ order, row }) => {
  const dispatch = useDispatch()
  const [expand, setExpand] = React.useState(false);
  const [color, setColor] = useState(expand?"Gray":"White")
  const { detailOfOrderId, orderDetails } = useSelector(reduxData => reduxData.orderDetailReducers)
  const orderId = order._id

  useEffect(() => {
    if (expand) {
      dispatch(getAllOrderDetailOfOrder({ orderId }))
    }
    expand?setColor("#FFB74D"):setColor("White")
  }, [expand])

  useEffect(() => {
    if (orderId !== detailOfOrderId) {
      setExpand(false)
    }
  }, [detailOfOrderId])

  return (
    <React.Fragment>
      <TableRow key={row} onClick={() => setExpand(!expand)} sx={{ backgroundColor: color }}>
        <TableCell>{order.orderCode}</TableCell>
        <TableCell>{order.orderDate}</TableCell>
        <TableCell>{order.cost}</TableCell>
        <TableCell>{order.customer.firstName} {order.customer.lastName}</TableCell>
        <TableCell>{order.customer.phone}</TableCell>
        <TableCell>{order.customer.address}</TableCell>
        <TableCell>{order.note}</TableCell>
        <TableCell>{order.status}</TableCell>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setExpand(!expand)}>
            {expand ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>

      {/* Collapse Row */}
      <TableRow sx={{ border: "1px solid #FFB74D" }}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9} >
          <Collapse in={expand} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 3 }} >
              <Typography variant="h6" gutterBottom component="div">
                Order Detail
              </Typography>
              <Table size="small" aria-label="purchases" >
                <TableHead >
                  <TableRow >
                    <TableCell >Image</TableCell>
                    <TableCell>Brand</TableCell>
                    <TableCell >Name</TableCell>
                    <TableCell >Type</TableCell>
                    <TableCell >Quantity</TableCell>
                    <TableCell >Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orderDetails.map((orderDetail, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        <img alt="Girl in a jacket" width="100" height="auto" src={orderDetail.product.imageUrl} />
                      </TableCell>
                      <TableCell>{orderDetail.product.brand}</TableCell>
                      <TableCell >{orderDetail.product.name}</TableCell>
                      <TableCell >{orderDetail.product.type}</TableCell>
                      <TableCell >{orderDetail.product.promotionPrice}</TableCell>
                      <TableCell >{orderDetail.quantity}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

