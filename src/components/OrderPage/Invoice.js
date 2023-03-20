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
	// note: Yup.string().required('Note is required').trim(),
});

export const Invoice = ({ initCustomer, surcharge, total }) => {
	const [note, setNote] = useState("")
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = async (values) => {
		//   await dispatch(updateProductById(initCustomer._id, values));
		//   await setOpenSnackBar(true)
		console.log("Handle submit")
		console.log(values)
	};

	return (
		<React.Fragment>
			<Formik initialValues={initCustomer} validationSchema={validOrderSchema} onSubmit={handleSubmit}>
				{({ errors, touched, values, handleChange }) => (
					<Form>
						<MyGrid>
							<h2>Invoice</h2>
							<Label />Your's information
							<TextField
								InputProps={{
									startAdornment: <InputAdornment position="start">First Name: </InputAdornment>,
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
									startAdornment: <InputAdornment position="start">Last Name: </InputAdornment>,
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
									startAdornment: <InputAdornment position="start">Phone: </InputAdornment>,
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
									startAdornment: <InputAdornment position="start">Email: </InputAdornment>,
								}}
								fullWidth
								value={values.email}
								id="email"
								name="email"
								error={errors.email && touched.email}
								helperText={touched.email && errors.email}
								// onChange={handleChange}
								variant="standard"
							/>
							<TextField sx={{ mt: 2 }}
								InputProps={{
									startAdornment: <InputAdornment position="start">City: </InputAdornment>,
								}}
								fullWidth
								value={values.city}
								id="city"
								name="city"
								onChange={handleChange}
								error={errors.city && touched.city}
								helperText={touched.city && errors.city}
								variant="standard"
							/>
							<TextField sx={{ mt: 2 }}
								InputProps={{
									startAdornment: <InputAdornment position="start">Country: </InputAdornment>,
								}}
								fullWidth
								value={values.country}
								id="country"
								name="country"
								onChange={handleChange}
								error={errors.country && touched.country}
								helperText={touched.country && errors.country}
								variant="standard"
							/>
							<Label />Delivery address:
							<TextField
								fullWidth
								multiline
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
								multiline
								value={note}
								id="note"
								name="note"
								variant="standard" onChange={(e) => setNote(e.target.value)} />
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
								<Button variant="outlined" onClick={() => navigate("/products")} >
									BUY MORE
								</Button>
								<Button
									variant="contained"
									type="submit"
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

