import React, { useState } from 'react'
import Axios from 'axios'
import styled from 'styled-components'
import Logo from './assests/images/logo.jpg'

const Container = styled.div`
align-items : center;
justify-content : center;
width : 100%;
margin-top : 2em;
box-sizing : border-box;
display : flex;
flex-direction : column;
`
const Subcontainer = styled.div`

width : 20em;
height : max-content;
border-radius : 25px;
align-items : center;
justify-content : center;
padding : 3em;
background : whitesmoke;
`
const H3 = styled.h4`
font-size : 1.5rem;
padding : 5px;
width : 100%;
text-align : center;
font-family : 'Roboto', 'sans-serif';
`
const Img = styled.img`
width : 50px;
height : 50px;
`
const LogoHeader = styled.div`
display : flex;
flex-direction : column;
align-items : center;
width : 100%;
justify-content : center;
`
const PasswordGroup = styled.div`
display : flex;
flex-direction : row;
gap : 30%;
`
const A = styled.a`
font-size : 0.6em;
text-decoration : none;
`
const BottomContainer = styled.div`
box-sizing : border-box;
margin : 1em;
`
const Inside = styled.div`
display : flex;
flex-direction : row;
padding : 1em;
`
const FooterLinks = styled.div`
display : flex;
gap : 1.3em;
font-size : 1em;
`
const Special = styled.a`
color : #05DA73;
text-decoration : none;
&:hover{
cursor : pointer;
text-decoration : none;
color : #05DA73;
opacity : 0.5;
}
`
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const logininfo = () => {

        Axios({
            method: 'POST',
            data: {
                email: email,
                password: password
            },
            withCredentials: true,
            credentials: 'same-origin',
            url: 'http://localhost:5000/farmer/login',

        }).then(function (response) {

            if (response.data.redirect === '/') {
                window.location = `/afterhome/${response.data.val._id}`
            }
            else if (response.data.redirect === '/error') {
                console.log('error in login after')
            }
        }).catch(function (error) {
            console.log(error)
        })
    }

    return (
        <>
            <Container>
                <LogoHeader>
                    <Img src={Logo} alt="logo_image" />
                    <H3>Log in Farmspace</H3>
                </LogoHeader>
                <Subcontainer>

                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} name="email" id="email" />
                    </div>
                    <div className="form-group">
                        <PasswordGroup>
                            <label htmlFor="password">Password</label>
                            <A href="/">Forgot password?</A>
                        </PasswordGroup>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" name="password" id="password" />
                    </div>

                    <button onClick={logininfo} className="btn btn-success btn-block">Log in</button>

                    <span>validation</span>

                </Subcontainer>
                <BottomContainer>
                    <Inside>
                        <span>New to Farmspace? &nbsp;</span>
                        <a href="/register">Create an account</a>.
                    </Inside>
                </BottomContainer>
                <FooterLinks>
                    <a href="/">Terms</a>
                    <a href="/">Privacy</a>
                    <Special>Contact Farmspace</Special>
                </FooterLinks>
            </Container>
        </>
    )
}

export default Login
