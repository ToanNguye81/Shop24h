import {
  TableRow,
  TableBody,
  CircularProgress,
  Grid,
  Table,
  TableCell,
  TableHead,
  Button,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate()
  return (
    <React.Fragment>
      {pending ?
        <Grid item md={12} sm={12} lg={12} xs={12} textAlign="center">
          <CircularProgress />
        </Grid>
        :
        <>
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
                {orders.map((order, index) => {
                  return (
                      <TableRow key={index}>
                        <TableCell>{order.orderCode}</TableCell>
                        <TableCell>{order.orderDate}</TableCell>
                        <TableCell>{order.cost}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.phone}</TableCell>
                        <TableCell>{order.address}</TableCell>
                        <TableCell>{order.note}</TableCell>
                        <TableCell>{order.status}</TableCell>
                        <TableCell>
                          <Button variant="outlined" size="small" onClick={()=>navigate(`/dashboard/orders/${order._id}/orderDetails`)} value={order._id}>
                            ORDER DETAIL
                          </Button>
                        </TableCell>
                      </TableRow>
                  );
                })}
              </TableBody>
            </Table>
        </>
      }
    </React.Fragment>
  );
};
