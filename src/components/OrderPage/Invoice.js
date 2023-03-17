import { Info, Label } from "@mui/icons-material"
import { Avatar, AvatarGroup, Box, Button, Grid, InputAdornment, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const MyGrid = styled.div`
border:1.5px solid #E6E6E6;
background-color:#FFFFFF;
padding: 1rem 3rem 3rem 3rem;
margin-bottom: 3rem;
`
export const Invoice = ({ customer, surcharge, total }) => {
	const [note, setNote] = useState("")
	const navigate = useNavigate();



	const onBtnBuyClick = () => {
		navigate("/products")
	}
	return (
		<MyGrid>
				<h2>Invoice</h2>
				<Label />Your's information
				<TextField  fullWidth InputProps={{
					startAdornment: <InputAdornment position="start">First Name: </InputAdornment>,
				}} value={customer.firstName} variant="standard" />
				<TextField sx={{mt:2}} fullWidth InputProps={{
					startAdornment: <InputAdornment position="start">Last Name: </InputAdornment>,
				}} value={customer.lastName} variant="standard" />
				<TextField sx={{mt:2}} fullWidth InputProps={{
					startAdornment: <InputAdornment position="start">Phone: </InputAdornment>,
				}} value={customer.phone} variant="standard" />
				<TextField sx={{mt:2}} fullWidth InputProps={{
					startAdornment: <InputAdornment position="start">Email: </InputAdornment>,
				}} value={customer.email} variant="standard" />
				<TextField sx={{mt:2}} fullWidth InputProps={{
					startAdornment: <InputAdornment position="start">City: </InputAdornment>,
				}} value={customer.city} variant="standard" />
				<TextField sx={{mt:2}} fullWidth InputProps={{
					startAdornment: <InputAdornment position="start">Country: </InputAdornment>,
				}} value={customer.country} variant="standard" />
				<Label />Delivery address
				<TextField  fullWidth multiline InputProps={{
					startAdornment: <InputAdornment position="start">Address: </InputAdornment>,
				}} value={customer.address} variant="standard" />
				<TextField sx={{mt:2}} fullWidth multiline InputProps={{
					startAdornment: <InputAdornment position="start">Note: </InputAdornment>,
				}} value={note} variant="standard" onChange={(e)=>setNote(e.target.value)} />
				<Label />Surcharge
				<TextField  fullWidth InputProps={{
					startAdornment: <InputAdornment position="start">Transport: </InputAdornment>,
				}} value={surcharge} variant="standard" />
				<Box sx={{ mt: 2 }}>
					<h4>Total:$ {total}</h4>
				</Box>
				<Grid container
					direction={{ xs: "column", sm: "row" }}
					justifyContent="space-evenly"
					alignItems="center"
					sx={{ marginTop: "16px" }}>
					<Button variant='outlined' onClick={onBtnBuyClick} >BUY MORE</Button>
					<Button variant="outlined">CHECK OUT</Button>
				</Grid>
		</MyGrid>
	)
}