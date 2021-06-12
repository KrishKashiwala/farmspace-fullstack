import React from 'react'
import styled from 'styled-components'
const MainContainer = styled.div`
margin-top : 6em;
`
const LowerContainer = styled.div`
display : flex;
flex-direction : row;
align-items : center;
padding : 2em;
background : #222222;
color : white;
height : 10vh;
justify-content : space-between;
`
const A = styled.a`
color : white;
&:hover{
    color : #05DA73;
}
`
const SocialLinks = styled.div`
display : flex;
flex-direction : row;
justify-content : space-between;
gap : 1em;
margin-right : 15em;
`
const Top = styled.a`
padding : 1em;
color : white;
&:hover{
    background :#05DA73;
    color : black;
    text-decoration : none;
    border-radius : 10px;
}
`
const UpperContainer = styled.div`
background : #272727;
padding : 3em;
display : flex;
flex-direction : row;
justify-content : space-between;
`
const Company = styled.div`
display : flex;
flex-direction : column;
color : whitesmoke;
`
const H4 = styled.h4`
color : #05DA73;
`
const Ul = styled.ul`
display : flex;
flex-direction : column;
`
const ContactUs = styled(Company)``
const Alink = styled.a`
color : #05DA73;
text-decoration  :none;
&:hover{
color : #05DA73;
}
`
const Li = styled.li`
display : flex;
flex-direction : row;
justify-content  : space-between;
align-items : center;
width : 10em;
`
const Al = styled.a`
color : whitesmoke;
&:hover{
    color : whitesmoke;
    text-decoration : none;
}
`


const Footer = () => {
    return (
        <MainContainer>
            <UpperContainer>
                <Company>
                    <H4>Company</H4>
                    <Ul>
                        <Al href='/'>
                            <Li>
                                <span>Blog</span>
                                <i className="fa fa-chevron-right"></i>
                            </Li>
                        </Al>
                        <Al href='/'>
                            <Li>
                                <span>Contact Us</span>
                                <i className="fa fa-chevron-right"></i>
                            </Li>
                        </Al>
                        <Al href='/'>
                            <Li>
                                <span>Services</span>
                                <i className="fa fa-chevron-right"></i>
                            </Li>
                        </Al>
                    </Ul>
                </Company>
                <ContactUs>

                    <H4>Contact Us</H4>
                    Rudravan Raw House  , Adajan , Surat
                    <span>Email : <Alink href="mailto:krishkashiwala@gmail.com">krishkashiwala@gmail.com</Alink> </span>
                </ContactUs>

            </UpperContainer>
            <LowerContainer>
                <span>  2021 &nbsp; &copy;&nbsp; All Rights Reserved . <A href="/privacypolicy">Privacy Policy</A> | <A href="/termsofservice">Terms of Service</A> </span>
                <SocialLinks>
                    <A href="/facebook"><i className="fab fa-facebook-f" /></A>
                    <A href="/linkedin"><i className="fab fa-linkedin" /></A>
                    <A href="/facebook"><i className="fab fa-twitter" /></A>
                </SocialLinks>
                <Top href="#top"> <i className="icon-chevron-up"></i> </Top>
            </LowerContainer>

        </MainContainer>
    )
}

export default Footer
