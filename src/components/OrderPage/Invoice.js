import { Info, Label } from "@mui/icons-material"
import { Avatar, AvatarGroup, Box, Button, Grid, TextField, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const MyGrid = styled.div`
border:1.5px solid #E6E6E6;
background-color:#FFFFFF;
padding: 1rem 3rem 3rem 3rem;
margin-bottom: 3rem;
`
export const Invoice = ({ user,surcharge,total }) => {
	const navigate=useNavigate();
	const onBtnBuyClick = () => {
		navigate("/products")
	}
	return (
		<MyGrid>
			<h2>Invoice</h2>
			<hr />
			<Label />Your's information
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6} md={6} >
					<TextField fullWidth value={user.firstName} variant="standard" label="First Name" />
				</Grid>
				<Grid item xs={12} sm={6} md={6} >
					<TextField fullWidth value={user.lastName} variant="standard" label="Last Name" />
				</Grid>
			</Grid>
			<TextField fullWidth value={user.phone} variant="standard" label="Phone" />
			<TextField fullWidth value={user.email} variant="standard" label="Email" />
			<TextField fullWidth value={user.city} variant="standard" label="City" />
			<TextField fullWidth value={user.country} variant="standard" label="Country" />
			<Label />Delivery address:
			<TextField fullWidth value={user.address} variant="standard" label="Address" />
			<Label />Surcharge:
			<TextField fullWidth value={surcharge} variant="standard" label="Transport" />
			<Box sx={{mt:2}}>
			<h4>Total:{total}</h4>
			</Box>
			<Grid container
				direction={{ xs: "column", sm: "row" }}
				justifyContent="space-evenly"
				alignItems="center"
				sx={{ marginTop: "16px" }}>
				<Button variant='outlined' onClick={onBtnBuyClick} >Mua tiếp</Button>
				<Button variant="outlined">Đặt hàng</Button>
			</Grid>
		</MyGrid>
	)
}