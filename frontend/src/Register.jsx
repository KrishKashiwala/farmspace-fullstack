import React, { useState } from 'react'
import Axios from 'axios'
import farmerlogo from './assests/images/farmer-logo.png'
import styled from 'styled-components'
const Img = styled.img`
width : 20em;
height : 20em;
align-items : center;
justify-content : center;
margin-left : 30%;
margin-top : 25%;
`
const Container = styled.div`
display  : flex;
flex-direction : row;
gap : 20%;
width  : 100%;
`
const H = styled.h1`
    text-align : center;    
    font-family: 'Bebas Neue', cursive;
    margin-top : 1.1em;
    font-size : 60px;
    
`
const H2 = styled.h2`
    text-align : center;    
    font-family: 'Cookie', cursive;
    margin-top : 2em;
    margin-left : 4em;
`
const Register = ({ history }) => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [address, setAddress] = useState('')
    const [bday, setBday] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log(history)
    const registerinfo = () => {
        Axios({
            method: 'POST',
            data: {
                // fname: fname,
                // lname: lname,
                // address: address,
                email: email,
                // bday: bday,
                password: password
            },
            withCredentials: true,
            url: 'http://localhost:5000/farmer/register'
        }).then(function (response) {
            if (response.data.redirect === '/login') {
                window.location = "/login"
            }
        }).catch(function (error) {
            console.log(error)
        })
    }
    return (
        <Container>
            <div>
                <Img src={farmerlogo} alt="farmer_logo" />
                <H2>Farmers are the seed to humanity</H2>
            </div>
            <div>
                <H>Create your Farmspace account</H>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="fname">First Name</label>
                        <input onChange={(e) => setFname(e.target.value)} className="form-control" type="text" name="fname" id="fname" placeholder="enter your first name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lname">Last Name</label>
                        <input onChange={(e) => setLname(e.target.value)} className="form-control" type="text" name="lname" id="lname" placeholder="enter your last name" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="bday">Birthday</label>
                    <input type="date" onChange={(e) => setBday(e.target.value)} className="form-" name="bday" className="form-control col-md-4" id="bday" />

                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="address" onChange={(e) => setAddress(e.target.value)} name="address" className="form-control col-md-12" id="address" placeholder="enter your address" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" className="form-control" id="email" placeholder="enter your email " />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="mobileno">Mobile No</label>
                        <input type="number" name="mobileno" className="form-control" id="mobileno" placeholder="enter your mobile no. " />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="state">State</label>
                        <input type="text" className="form-control" name="state" id="state" placeholder="select your state" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="city">City / Village</label>
                        <input type="text" className="form-control" name="city" id="city" placeholder="select your city" />
                    </div>
                    <div className="form-group col-md-5">
                        <label htmlFor="pincode">Pincode</label>
                        <input type="number" className="form-control" name="pincode" id="pincode" placeholder="enter your pincode" />
                    </div>

                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="password">Password</label>
                        <input className="form-control" onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="enter a password" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="cpassword">Confirm Password</label>
                        <input className="form-control" type="password" name="cpassword" id="cpassword" placeholder="re-enter your password" />
                    </div>
                </div>
                <button onClick={registerinfo} className="btn btn-success btn-block">Submit</button>

            </div>
        </Container>
    )
}

export default Register
