import {
  TableRow,
  TableBody,
  CircularProgress,
  Grid,
  Table,
  TableCell,
  TableHead,
  Button,
  IconButton,
  TableContainer,
  Collapse,
  Box,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useDispatch } from "react-redux";
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

    const [expand, setExpand]=useState(false)

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
                <Row key={index} row={index} order={order} expand={expand} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
    </React.Fragment>
  );
};

export const Row = ({ order, row, expand }) => {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(expand);
  const orderId = order._id
  useEffect(() => {
    if (open) {
      const result = dispatch(getAllOrderDetailOfOrder({ orderId }))
      console.log(result)
    }
  }, [open])
  // useEffect(() => {
  //   const result = dispatch(getAllOrderDetailOfOrder({orderId}))
  // }, [])
  return (
    <React.Fragment>
      <TableRow key={row}>
        <TableCell>{order.orderCode}</TableCell>
        <TableCell>{order.orderDate}</TableCell>
        <TableCell>{order.cost}</TableCell>
        <TableCell>{order.customer}</TableCell>
        <TableCell>{order.phone}</TableCell>
        <TableCell>{order.address}</TableCell>
        <TableCell>{order.note}</TableCell>
        <TableCell>{order.status}</TableCell>
        <TableCell>
          {/* <Button variant="outlined" size="small" onClick={() => navigate(`/dashboard/orders/${order._id}/orderDetails`)} value={order._id}>
              ORDER DETAIL
            </Button> */}
          {/* Ô chứ cell */}
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>

      {/* Ô bị ẩn đi */}
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Order Detail
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Brand</TableCell>
                    <TableCell >Name</TableCell>
                    <TableCell >Type</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {result.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.name}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))} */}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

