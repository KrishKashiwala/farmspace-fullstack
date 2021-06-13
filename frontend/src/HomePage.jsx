import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from './assests/images/logo.jpg'
import Axios from 'axios'
import landingImage from './assests/images/back-temp.jpg'
import './assests/css/HomePage.css'
import Footer from './Footer'
const Trending = styled.div`
    display : flex;
    flex-direction : column;
     margin-top : 0px;
   width: 20vw;
  box-sizing: border-box;
  
  font-family: 'Roboto', sans-serif;
  border-radius: 25px;
  color: black;
  box-shadow: 5px 5px 10px #0B0E11;
  float: left;
  height : 25vh;
  padding : 1em;
  
  justify-content :space-between;
`
const Logo = styled.img`    
width  : 100px;
height : 80px;
`
const TrendItems = styled.div`
display : flex;
flex-direction : row;
gap : 2em;
`
const InnerHead = styled.span`

background-size : cover;
font-size : 2vw;
`
const InnerTrend = styled.div`
display : flex;
flex-direction : row;
justify-content :space-around;

`
const Explore = styled.a`
display : flex;
flex-direction : column;

`
const HomePage = ({ match, history, location }) => {

    const [loggedFarmer, setLoggedFarmer] = useState({})
    const [veggiesData, setVeggiesData] = useState([{}])
    const [fruitsData, setFruitsData] = useState([{}])
    const [spicesData, setSpicesData] = useState([{}])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const loggedCheck = () => {
        Axios({ method: 'GET', url: 'www.localhost:5000/farmer/' }).then(response => {

            if (response.data.flag) {
                setLoggedFarmer(response.data.val)
            }
        }).catch(e => {
            console.log(e)
        })
    }
    console.log('hello logged farmer', loggedFarmer)
    useEffect(() => {
        loggedCheck()
        // veggiesRequest();
        // fruitsRequest();
        // spicesRequest();

    }, [])
    const veggiesRequest = async () => {
        await fetch('http://localhost:5000/crop/trendingvegetables').then(res => res.json()).then(data => setVeggiesData(data))
    }
    const fruitsRequest = async () => {
        await fetch('http://localhost:5000/crop/trendingfruits').then(res => res.json()).then(data => setFruitsData(data))
    }
    const spicesRequest = async () => {
        await fetch('http://localhost:5000/crop/trendingspices').then(res => res.json()).then(data => setSpicesData(data))
    }
    const loggedRequest = async () => {
        await fetch(`http://localhost:5000/farmer/loggedfarmer/${match.params.id}`).then(res => res.json()).then(data => {
            console.log(data)
            setLoggedFarmer(data)
        })

    }

    return (
        <div>

            {/* nav bar */}
            <nav id="top">
                <ul className="nav-ul">
                    <li><a href="/"><Logo src={logo} alt="logo_image" /></a> </li>
                    <div className="options">
                        <li id="veggies"><a href="/">Veggies</a> </li>
                        <li><a href="/">Fruites</a> </li>
                        <li><a href="/">Spices</a> </li>
                    </div>
                    <div className="end_nav">

                        <li><a href="/">Community</a></li>

                        {/* register page */}
                        <Link to="/register">
                            <li>register</li>
                        </Link>
                        <Link to="/login">
                            <li>login</li>
                        </Link>
                        <li>{loggedFarmer.fname}</li>

                        <li className="free"><a className="btn free" href="#trendcontainer">Trending</a></li>

                    </div>

                </ul>
            </nav>

            {/* landing page */}

            <div className="landing_page">
                <img src={landingImage} alt="landingImage" />
                <h1>Connecting farmers to Wholesalers and Customers</h1>
                <a href="/register" className="btn">Register Free</a>
            </div>

            {/* cards section  */}

            <h1 className="extra">Explore Different Varities of Cards</h1>

            <div className="cards">

                <div className="veggies_card">
                    <h1>Veggies</h1>
                </div>
                <div className="fruits_card">
                    <h1>fruits</h1>
                </div>
                <div className="spices_card">
                    <h1>spices</h1>
                </div>
            </div>
            <div id="trendcontainer">

                <h1 className="extra">Explore Trending Items</h1>
                <div className="trending_veggies veg">

                    <h1 className="title_cards">Trending Veggies</h1>

                    <TrendItems>
                        {veggiesData.length <= 0 ? 'no vegetables trending' : veggiesData.map(datas => {
                            return (
                                <Trending >
                                    <InnerHead>{datas.title}</InnerHead>
                                    <InnerTrend>
                                        <span> <i className="fa fa-balance-scale"></i> {datas.weight} <small>KG</small>  </span>
                                        <span><i className="fa fa-rupee-sign"></i> {datas.price}

                                        </span>
                                    </InnerTrend>
                                    <Explore href="/" className="btn btn-success">Explore</Explore>
                                </Trending>
                            )
                        })

                        }
                    </TrendItems>
                </div>
                <div className="trending_fruits fru">


                    <h1 className="title_cards">Trending Fruits</h1>

                    <TrendItems>
                        {fruitsData.length <= 0 ? 'no fruits trending' : fruitsData.map(datas => {
                            return (
                                <Trending >
                                    <InnerHead>{datas.title}</InnerHead>
                                    <InnerTrend>
                                        <span> <i className="fa fa-balance-scale"></i> {datas.weight} <small>KG</small></span>
                                        <span><i className="fa fa-rupee-sign"></i> {datas.price}

                                        </span>
                                    </InnerTrend>
                                    <Explore href="/" className="btn btn-success">Explore</Explore>
                                </Trending>
                            )
                        })

                        }
                    </TrendItems>
                </div>
                <div className="trending_spices spi">

                    <h1 className="title_cards">Trending Spices</h1>

                    <TrendItems>
                        {spicesData.length <= 0 ? 'no spices trending' : spicesData.map(datas => {
                            return (
                                <Trending >
                                    <InnerHead>{datas.title}</InnerHead>
                                    <InnerTrend>
                                        <span> <i className="fa fa-balance-scale"></i> {datas.weight} <small>KG</small></span>
                                        <span><i className="fa fa-rupee-sign"></i> {datas.price}

                                        </span>
                                    </InnerTrend>
                                    <Explore href="/" className="btn btn-success">Explore</Explore>
                                </Trending>
                            )
                        })

                        }
                    </TrendItems>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage