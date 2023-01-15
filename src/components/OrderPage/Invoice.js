import { Info, Label } from "@mui/icons-material"
import { Avatar, AvatarGroup, Grid, TextField, Typography } from "@mui/material"
import styled from "styled-components"

const MyGrid = styled.div`
border:0.1px solid #E6E6E6;
background-color:#FFFFFF;
padding: 1rem 3rem 3rem 3rem;
`
export const Invoice = () => {
	return (
		<MyGrid>
			<h2>Invoice</h2>
			<hr/>
			<Label/>Your's information
			<TextField fullWidth variant="standard" label="Full Name"/>
			<TextField fullWidth variant="standard" label="Phone"/>
			<TextField fullWidth variant="standard" label="Email"/>
			<Label/>Delivery address:
			<TextField fullWidth variant="standard" label="Address"/>
			<TextField fullWidth variant="standard" label="City"/>
			<TextField fullWidth variant="standard" label="Country"/>
			<Label/>Subtotal:
			<></>
			</MyGrid>
	)
}