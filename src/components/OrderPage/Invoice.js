import { Label } from "@mui/icons-material"
import { Box, Button, Grid, InputAdornment, MenuItem, Select, TextField } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { handleCreateOrder } from "../../actions/order.actions"
import { fetchCities, fetchCountries } from "../../actions/signUp.actions"

const MyGrid = styled.div`
border:1.5px solid #E6E6E6;
background-color:#FFFFFF;
padding: 1rem 3rem 3rem 3rem;
margin-bottom: 3rem;
`
const validCustomerSchema = Yup.object().shape({
	firstName: Yup.string().required('First Name is required').trim(),
	lastName: Yup.string().required('Last Name is required').trim(),
	phone: Yup.string().required('Phone is required').matches(/^[0-9]+$/, 'Phone number should only contain digits'),
	email: Yup.string().required('Email is required').email('Invalid email').trim(),
	city: Yup.string().required('City is required').trim(),
	country: Yup.string().required('Country is required').trim(),
	address: Yup.string().required('Address is required').trim(),
});

export const Invoice = ({ surcharge, total }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { cart } = useSelector(reduxData => reduxData.cartReducers)
	const { customer } = useSelector(reduxData => reduxData.orderReducers)
	const { loadCountriesPending, countryOptions, cityOptions } = useSelector((reduxData) => reduxData.signUpReducers);


	const handleSubmit = (customer) => {
		dispatch(handleCreateOrder({ customer, cart }))
	};

	useEffect(() => {
		dispatch(fetchCountries());
	}, []);

	useEffect(() => {
		if(customer&&countryOptions)
		dispatch(fetchCities(customer.country));
	}, [countryOptions,customer]);

	const handleCountryChange = (event) => {
		dispatch(fetchCities(event.target.value));
	}

	return (
		<React.Fragment>
			<Formik initialValues={{ ...customer }} validationSchema={validCustomerSchema} onSubmit={handleSubmit}>
				{({ errors, touched, values, handleChange,setFieldValue }) => (
					<Form>
						<MyGrid>
							<h2>Invoice</h2>
							<Label />Your information
							<TextField
								InputProps={{
									startAdornment: <InputAdornment position="start">First Name * : </InputAdornment>,
								}}
								fullWidth
								value={values.firstName}
								id="firstName"
								name="firstName"
								variant="standard"
								onChange={handleChange}
								error={errors.firstName && touched.firstName}
								helperText={touched.firstName && errors.firstName}
							/>
							<TextField sx={{ mt: 2 }}
								InputProps={{
									startAdornment: <InputAdornment position="start">Last Name * : </InputAdornment>,
								}}
								fullWidth
								value={values.lastName}
								id="lastName"
								name="lastName"
								onChange={handleChange}
								error={errors.lastName && touched.lastName}
								helperText={touched.lastName && errors.lastName}
								variant="standard"
							/>
							<TextField sx={{ mt: 2 }}
								InputProps={{
									startAdornment: <InputAdornment position="start">Phone * : </InputAdornment>,
								}}
								fullWidth
								value={values.phone}
								id="phone"
								name="phone"
								onChange={handleChange}
								error={errors.phone && touched.phone}
								helperText={touched.phone && errors.phone}
								variant="standard"
							/>
							<TextField sx={{ mt: 2 }}
								InputProps={{
									startAdornment: <InputAdornment position="start">Email * : </InputAdornment>,
								}}
								fullWidth
								value={values.email}
								id="email"
								name="email"
								error={errors.email && touched.email}
								helperText={touched.email && errors.email}
								variant="standard"
							/>
							<Select
								sx={{ mt: 2 }}
								fullWidth
								value={values.country}
								id="country"
								name="country"
								onChange={(e) => {
									handleChange(e);
									handleCountryChange(e);
									setFieldValue("city", "")
								}}
								error={errors.country && touched.country}
								helpertext={touched.country && errors.country}
								variant="standard"
								startAdornment={<InputAdornment position="start">Country * : </InputAdornment>}
							>
								{countryOptions && countryOptions.map((option,index) => (
									<MenuItem key={index} value={option.iso2}>
										{option.name}
									</MenuItem>
								))}
							</Select>
							<Select
								sx={{ mt: 2 }}
								fullWidth
								value={values.city}
								id="city"
								name="city"
								onChange={(e) => {handleChange(e);}}
								error={errors.city && touched.city}
								helpertext={touched.city && errors.city}
								variant="standard"
								startAdornment={<InputAdornment position="start">City * : </InputAdornment>}
							>
								{cityOptions&&cityOptions.map((option,index) => (
									<MenuItem key={index} value={option.name}>
										{option.name}
									</MenuItem>
									
								))}
							</Select>
							<Label />Delivery address * :
							<TextField
								fullWidth
								value={values.address}
								id="address"
								name="address"
								onChange={handleChange}
								error={errors.address && touched.address}
								helperText={touched.address && errors.address}
								variant="standard"
							/>
							<Label />Note:
							<TextField
								fullWidth
								onChange={handleChange}
								id="note"
								name="note"
								variant="standard" />
							<Label />Surcharge
							<TextField
								InputProps={{
									startAdornment: <InputAdornment position="start">Transport: </InputAdornment>,
								}}
								fullWidth
								id="surcharge"
								name="surcharge"
								value={0}
								variant="standard"
							/>
							<Box sx={{ mt: 2 }}>
								<h4>Total: $ {total}</h4>
							</Box>
							<Grid container
								direction="row"
								justifyContent="space-evenly"
								alignItems="center"
								sx={{ marginTop: "16px" }}
							>
								<Button variant="outlined"
									onClick={() => navigate("/products")}
								>
									BUY MORE
								</Button>
								<Button
									variant="contained"
									type="submit"
									sx={{ backgroundColor: "#24292E" }}
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

