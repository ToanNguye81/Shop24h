import { Info, Label } from "@mui/icons-material"
import { Avatar, AvatarGroup, Grid, TextField, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import styled from "styled-components"

const MyGrid = styled.div`
border:1.5px solid #E6E6E6;
background-color:#FFFFFF;
padding: 1rem 3rem 3rem 3rem;
margin-bottom: 3rem;
`
export const Invoice = ({ user }) => {
	return (
		<MyGrid>
			<h2>Invoice</h2>
			<hr />
			<Label />Your's information
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6} md={6} >
					<TextField fullWidth value={user} variant="standard" label="First Name" />
				</Grid>
				<Grid item xs={12} sm={6} md={6} >
					<TextField fullWidth value={user} variant="standard" label="Last Name" />
				</Grid>
			</Grid>
			<TextField fullWidth value={user} variant="standard" label="Phone" />
			<TextField fullWidth value={user} variant="standard" label="Email" />
			<TextField fullWidth value={user} variant="standard" label="City" />
			<TextField fullWidth value={user} variant="standard" label="Country" />
			<Label />Delivery address:
			<TextField fullWidth value={user} variant="standard" label="Address" />
			<hr />
			<Label />Subtotal:
			<TextField fullWidth value={user} variant="standard" label="Transport" />
			<h4>Total:</h4>
		</MyGrid>
	)
}