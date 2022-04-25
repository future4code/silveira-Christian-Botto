import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardContainer, CardButton, CardMatch, FlexMatch, FlexText, GifDiv } from './styles'
import Heart from '../img/heart.png';
import XX from '../img/x.png';
import Giff from '../img/gif.gif'

const Home = (props) => {
    const [prof, setProf] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getProf()
    }, [])


    const getProf = () => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/christian-silveira/person'
        axios
            .get(url)
            .then((response) => {
                setProf(response.data.profile)
            })
            .catch((error) => {
                alert(error.response.data)
            })
    }

    const acceptProf = () => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/christian-silveira/choose-person'
        const body = {
            id: prof.id,
            choice: true
        }
        axios
            .post(url, body)
            .then((response) => {
                alert("You iked this person :D")
                setLoading(true)
                setTimeout(() => { setLoading(false) }, 1000);
                getProf()
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    const refuseProf = () => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/christian-silveira/choose-person'
        const body = {
            id: prof.id,
            choice: false
        }
        axios
            .post(url, body)
            .then((response) => {
                alert("You didn' like this person :(")
                setLoading(true)
                setTimeout(() => { setLoading(false) }, 1000);
                getProf()
            })
            .catch((error) => {
                alert(error.message)
            })
    }


    switch (loading) {
        case true:
            return (
                <CardContainer>
                    <FlexMatch>
                        <FlexText>FIRE-MATCH</FlexText>
                        <CardButton onClick={props.gotoProf}>Profile</CardButton>
                    </FlexMatch>
                    <br />
                    <GifDiv>
                        <img src={Giff} alt='gif' width='100px' />
                    </GifDiv>
                    <br />
                    <FlexMatch>
                        <>
                            <CardMatch onClick={refuseProf}><img src={XX} width="40vw" height="40vh" /></CardMatch >
                        </>
                        <>
                            <CardMatch onClick={acceptProf}><img src={Heart} width="40vw" height="40vh" /></CardMatch >
                        </>
                    </FlexMatch>
                </CardContainer>
            )
        case false:
            return (
                <CardContainer>
                    <FlexMatch>
                        <FlexText>FIRE-MATCH</FlexText>
                        <CardButton onClick={props.gotoProf}>Profile</CardButton>
                    </FlexMatch>
                    <br />
                    <img src={prof.photo} alt={prof.name} width="400vw" height="300vh" />
                    <p> {prof.name}, {prof.age} </p>
                    <p>{prof.bio}</p>
                    <br />
                    <FlexMatch>
                        <>
                            <CardMatch onClick={refuseProf}><img src={XX} width="40vw" height="40vh" /></CardMatch >
                        </>
                        <>
                            <CardMatch onClick={acceptProf}><img src={Heart} width="40vw" height="40vh" /></CardMatch >
                        </>
                    </FlexMatch>
                </CardContainer>
            )
    }
}

export default Home