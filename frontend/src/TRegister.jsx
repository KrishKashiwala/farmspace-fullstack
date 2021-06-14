import React from 'react'
import {
	Formik,
	Field,
	Form,
	useField,
	FieldArray
} from "formik";
import {
	TextField,
	Button,
	Checkbox,
	Radio,
	FormControlLabel,
	Select,
	Grid,
	MenuItem
} from "@material-ui/core";
import * as yup from 'yup'
import Axios from 'axios'
import styled from 'styled-components'

const TRegister = () => {
	const LeftContainer = styled.div`
	display : flex;
	flex-direction : column;

	`
	const RightContainer = styled(LeftContainer)`
	`
	const MyTextField = ({ placeholder, type, variant, label, ...props }) => {
		const [field, meta] = useField(props)
		const errorText = meta.error && meta.touched ? meta.error : ''
		return (
			<TextField {...field} type={type} variant={variant} label={label} placeholder={placeholder} helperText={errorText} error={!!errorText} />
		)
	}
	const validationSchema = yup.object({
		fname: yup.string().required('Please enter first name'),
		lname: yup.string().required('Please enter last name'),
		email: yup.string().required('Please enter email'),
		address: yup.string().required('Please enter address'),
		password: yup.number().required('Please enter password'),
		confirmPassword: yup.number().required('Re-enter your password'),
		bday: yup.string().required('Please enter birthday'),
		state: yup.string().required('Please enter state'),
		city: yup.string().required('Please enter city'),
		pincode: yup.number().required('Please enter pincode'),
		mobileNo: yup.number().required('Please enter mobile no..')
	})
	return (
		<Formik validateOnChange={true} initialValues={
			{
				fname: '',
				lname: '',
				email: '',
				address: '',
				password: '',
				confirmPassword: '',
				mobileNo: '',
				bday: '',
				pincode: '',
				state: '',
				city: '',
			}
		} validationSchema={validationSchema} onSubmit={(data, { setSubmitting, resetForm }) => {
			const { fname, lname, address, email, mobileNo, bday, pincode, state, city, password, confirmPassword } = data
			setSubmitting(true)
			console.log(data)
			Axios({
				method: 'POST',
				data: {
					fname, lname, address, email, mobileNo, bday, pincode, state, city, password, confirmPassword
				},
				withCredentials: true,
				url: 'http://localhost:5000/farmer/register'
			}).then(function (response) {
				if (response.data.redirect === '/login') {
					window.location = "/login"
				}
				else {
					window.location = "/login"
				}
			}).catch(function (error) {
				console.log(error)
			})
			resetForm()
			setSubmitting(false)
		}}>
			{({ values, isSubmitting }) => {
				return (
					<Form >
						<LeftContainer>
							<Grid container spacing={3}>

								<Grid item xs sm  style={{ "background": "pink" }}>
									<MyTextField type="text" placeholder="Enter your first name" label="First Name" name="fname" variant="outlined" />

								</Grid>
								<Grid item xs={12} sm={6}>
									<MyTextField xs={6} type="text" placeholder="Enter your last name" label="Last Name" name="lname" variant="outlined" />

								</Grid>
								<Grid item xs={12} sm={6}>
									<MyTextField type="text" placeholder="Enter your Address" label="Address" name="address" variant="outlined" />

								</Grid>
								<Grid item xs={12} sm={6}>
									<MyTextField type="email" placeholder="Enter your email" label="Email" name="email" variant="outlined" />

								</Grid>
								<Grid item xs={12} sm={6}>
									<MyTextField type="number" placeholder="Enter your mobile no" label="Mobile No." name="mobileNo" variant="outlined" />
								</Grid>
								<Grid item xs={12} sm={6}>
									<MyTextField type="date" label="Date" placeholder="Enter Birthday" name="bday" variant="outlined" />
								</Grid>
								<Grid item xs={12} sm={6}>
									<MyTextField type="text" placeholder="Enter your state" label="State" name="state" variant="outlined" />
								</Grid>
								<Grid item xs={12} sm={6}>
									<MyTextField type="text" placeholder="Enter your city" label="City" name="city" variant="outlined" />
								</Grid>
								<Grid item xs={12} sm={6}>
									<MyTextField type="number" placeholder="Enter your pincode" label="Pincode" name="pincode" variant="outlined" />
								</Grid>
								<Grid item xs={12} sm={12}>
									<MyTextField type="text" placeholder="Enter your password" label="Password" name="password" variant="outlined" />
								</Grid>
								<Grid item xs={12} sm={6}>
									<MyTextField type="text" placeholder="Re-enter your password" label="Confirm Password" name="confirmPassword" variant="outlined" />
								</Grid>
							</Grid>
							<Button variant="contained" color="primary" type="submit" disabled={isSubmitting} >Register</Button>
						</LeftContainer>

					</Form>
				)
			}}
		</Formik >
	)
}

export default TRegister
