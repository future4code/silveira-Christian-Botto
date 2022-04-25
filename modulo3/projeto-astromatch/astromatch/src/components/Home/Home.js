import React, { useState, useEffect} from "react";
import axios from "axios";
import { CardContainer} from './styles'

const Home = (props) => {
    const [prof, setProf] = useState({})

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
                    getProf()
                })
                .catch((error) => {
                    alert(error.message)
                })        
    }


    return (
        <CardContainer>
            matchmatch
            <button onClick={props.gotoProf}>Profile</button>
            <br/>
            <img src={prof.photo} alt={prof.name} width= "300vw"  height = "300vh" />
          <p> {prof.name}, {prof.age} </p>
          <p>{prof.bio}</p>
<br/>
            <button onClick={refuseProf}>X</button>
            <button onClick={acceptProf}>S2</button>



        </CardContainer>
    )
}

export default Home