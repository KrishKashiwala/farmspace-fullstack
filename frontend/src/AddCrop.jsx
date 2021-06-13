import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Axios from 'axios'
const LeftContainer = styled.div`
align-items : center;
justify-content : left;
border : 1px solid black;
padding : 1em;
`
const RightContainer = styled.div`
display : flex;
flex-direction : column;
align-items : center;
justify-content : space-around;
border : 1px solid black;
width : 100vw;
`
const MainContainer = styled.div`
display : flex;
flex-direction : row;
gap : 40em;
margin : 10em;
`
const H3 = styled.span`
font-size : 1.5em;
`
const Span = styled.span`

`
const AddCrop = ({ match }) => {
    console.log(match)
    const addCrop = (e) => {
        // e.preventDefault()
        Axios({
            method: 'POST',
            data: {
                title: title,
                weight: weight,
                price: price,
                cropType: cropType,
                owner:  match.params.id
            },
            withCredentials: true,
            credentials: 'same-origin',
            url: `http://localhost:5000/crop/addcrop/${match.params.id}`,

        }).then(function (response) {
            if (response.data.redirect === '/') {
                window.location = `/afterhome/${match.params.id}`
            }
        }).catch(function (error) {
            console.log(error)
        })
    }
    const [cropSelect, setCropSelect] = useState()
    const [title, setTitle] = useState()
    const [weight, setWeight] = useState()
    const [price, setPrice] = useState()
    const [cropType, setCropType] = useState()
    useEffect(() => {
        document.title = 'Add Crop'
    }, [])
    return (
        <MainContainer>
            <LeftContainer>

                <div className="align-items-center form-row">
                    <div class="col-md-10">
                        <label for="cropType">Preference &nbsp;</label>
                        <select class="custom-select col-md-6" name="cropType" id="cropType" onChange={(e) => (setCropType(e.target.value))}>
                            <option selected>Choose...</option>
                            <option value="Veggies">Veggies</option>
                            <option value="Fruits">Fruits</option>
                            <option value="Spices">Spices</option>
                        </select>
                    </div>
                </div>
                <br />
                <div className="col-md-10">
                    <label htmlFor="title">Title</label>
                    <textarea className="form-control" name="title" id="title" cols="50" rows="5" onChange={(e) => (
                        setTitle(e.target.value)
                    )}></textarea>
                </div>
                <br />
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="weight">Weight <small>(KG)</small></label>
                        <input className="form-control" type="number" name="weight" id="weight" placeholder="enter weight" onChange={(e) => (
                            setWeight(e.target.value)
                        )} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="price">Price (<i className="fa fa-rupee-sign"></i>) </label>
                        <input className="form-control" type="number" name="price" id="price" placeholder="enter your price" onChange={(e) => (
                            setPrice(e.target.value)
                        )} />
                    </div>
                </div>

                {/* <label htmlFor="file">Upload Image</label>
                    <Input type="file" class="form-control" name="file" id="file" /> */}

                <button onClick={addCrop} className="btn btn-block btn-success">Add Crop</button>

            </LeftContainer>
            <RightContainer>

                <H3>Crop Summary</H3>
                <Span>Crop Type : {cropSelect} </Span>
                <Span>Title : {title}</Span>
                <Span>Weight : {weight} <small>&nbsp;(KG)</small></Span>
                <Span>Price : {price} <i className="fa fa-rupee-sign"></i> </Span>


            </RightContainer>
        </MainContainer>
    )
}

export default AddCrop
