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
export const Invoice = () => {

	const { userEmail } = useSelector((reduxData) => reduxData.signInReducers)

	return (
		<MyGrid>
			<h2>Invoice</h2>
			<hr />
			<Label />Your's information
			<TextField fullWidth variant="standard" label="Full Name" />
			<TextField fullWidth variant="standard" label="Phone" />
			<TextField fullWidth variant="standard" value={userEmail ? userEmail : null} label="Email" />
			<Label />Delivery address:
			<TextField fullWidth variant="standard" label="Address" />
			<TextField fullWidth variant="standard" label="City" />
			<TextField fullWidth variant="standard" label="Country" />
			<hr />
			<Label />Subtotal:
			<h4>Total:</h4>
		</MyGrid>
	)
}