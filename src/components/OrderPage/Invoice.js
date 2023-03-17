import { Label } from "@mui/icons-material"
import { Box, Button, Grid, InputAdornment, TextField } from "@mui/material"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { createNewOrder } from "../../actions/order.actions"

const MyGrid = styled.div`
border:1.5px solid #E6E6E6;
background-color:#FFFFFF;
padding: 1rem 3rem 3rem 3rem;
margin-bottom: 3rem;
`
const validOrderSchema = Yup.object().shape({
	firstName: Yup.string().required('First Name is required').trim(),
	address: Yup.string().required('Address is required').trim(),
	lastName: Yup.string().required('Last Name is required').trim(),
	phone: Yup.string().required('Phone is required').matches(/^[0-9]+$/, 'Phone number should only contain digits'),
	email: Yup.string().required('Email is required').email('Invalid email').trim(),
	city: Yup.string().required('City is required').trim(),
	country: Yup.string().required('Country is required').trim(),
	address: Yup.string().required('Address is required').trim(),
	note: Yup.string().required('Note is required').trim(),
});

export const Invoice = ({ initCustomer, surcharge, total }) => {
	const [note, setNote] = useState("")
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onBtnBuyClick = () => {
		navigate("/products")
	}

	// const handleOrderClick = () => {
	// 	dispatch(createNewOrder())
	// }

	const handleOrderClick = (event) => {
		event.preventDefault();
		const values = event.currentTarget.formik.values;
		console.log(values);
		dispatch(createNewOrder(values));
	};
	const valud = { firstName: "holo" }


	return (
		<React.Fragment>
			<Formik initialValues={valud} validationSchema={validOrderSchema} >
				{({ errors, touched, values, handleChange }) => (
					<Form>
						<MyGrid>
							<h2>Invoice</h2>
							<Label />Your's information
							<TextField fullWidth
								InputProps={{
									startAdornment: <InputAdornment position="start">First Name: </InputAdornment>,
								}}
								value={values.firstName}
								id="firstName"
								label="First Name"
								name="firstName"
								variant="standard"
								onChange={handleChange}
								error={errors.firstName && touched.firstName}
							/>
							<TextField sx={{ mt: 2 }} fullWidth InputProps={{
								startAdornment: <InputAdornment position="start">Last Name: </InputAdornment>,
							}} value={values.lastName}
								id="lastName"
								name="lastName"
								onChange={handleChange}
								error={errors.lastName}

								variant="standard"
							/>
							<TextField sx={{ mt: 2 }} fullWidth InputProps={{
								startAdornment: <InputAdornment position="start">Phone: </InputAdornment>,
							}}
								value={values.phone}
								id="phone"
								name="phone"
								onChange={handleChange}
								error={errors.phone}

								variant="standard"
							/>

							<TextField sx={{ mt: 2 }} fullWidth InputProps={{
								startAdornment: <InputAdornment position="start">Email: </InputAdornment>,
							}} value={values.email}
								id="email"
								name="email"
								error={errors.email}

								variant="standard"
							/>
							<TextField sx={{ mt: 2 }} fullWidth InputProps={{
								startAdornment: <InputAdornment position="start">City: </InputAdornment>,
							}} value={values.city}
								id="city"
								name="city"
								onChange={handleChange}
								error={errors.city}

								variant="standard"
							/>
							<TextField sx={{ mt: 2 }} fullWidth InputProps={{
								startAdornment: <InputAdornment position="start">Country: </InputAdornment>,
							}} value={values.country}
								id="country"
								name="country"
								onChange={handleChange}
								error={errors.country}

								variant="standard"
							/>
							<Label />Delivery address
							<TextField fullWidth multiline InputProps={{
								startAdornment: <InputAdornment position="start">Address: </InputAdornment>,
							}} value={values.address}
								id="address"
								name="address"
								onChange={handleChange}
								error={errors.address}

								variant="standard"
							/>
							<TextField sx={{ mt: 2 }} fullWidth multiline InputProps={{
								startAdornment: <InputAdornment position="start">Note: </InputAdornment>,
							}} value={note}
								variant="standard" onChange={(e) => setNote(e.target.value)} />
							<Label />Surcharge
							<TextField fullWidth InputProps={{
								startAdornment: <InputAdornment position="start">Transport: </InputAdornment>,
							}} value={surcharge}
								variant="standard"
							/>
							<Box sx={{ mt: 2 }}>
								<h4>Total:$ {total}</h4>
							</Box>
							<Grid container
								direction={{ xs: "column", sm: "row" }}
								justifyContent="space-evenly"
								alignItems="center"
								sx={{ marginTop: "16px" }}
							>
								<Button variant="outlined" onClick={onBtnBuyClick} >
									BUY MORE
								</Button>
								<Button
									variant="contained"
									onClick={(event) => handleOrderClick(event)}
									sx={{ backgroundColor: "#222222" }}
								>
									ORDER
								</Button>
							</Grid>
						</MyGrid>
					</Form>
				)}
			</Formik>
		</React.Fragment>
	)
}