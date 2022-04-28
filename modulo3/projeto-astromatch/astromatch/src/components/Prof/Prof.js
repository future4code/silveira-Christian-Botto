import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardContainer, CardButton, FlexMatch,  FlexText } from './styles'


const Prof = (props) => {

    const [likes, setLikes] = useState([]);

    useEffect(() => {
        getList()
    }, []);

    const getList = () => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/christian-silveira/matches'
        axios
            .get(url)
            .then((response) => {
                setLikes(response.data.matches)
            })
            .catch((error) => {
                alert(error.response.data)
            })
    }

    const clearAll = () => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/christian-silveira/clear'
        if (window.confirm(`Do you really want to clear your matches?`)) {
            axios
                .put(url)
                .then((response) => {
                    getList()
                    alert(`Cleared successfully!`)
                })
                .catch((error) => {
                    alert(error.response.data)
                })
        }
    }

    const allLikes = likes.map((prof) => {
        return (
            <>
                <img src={prof.photo} alt={prof.name} width= "65vw"  height = "65vh"  />
            {prof.name}
            <br/>
            </>
        )
      })




        return (
            <CardContainer>
                <FlexMatch>
                <CardButton onClick={props.gotoHome}>Profile</CardButton >
                <FlexText>FIRE-MATCH</FlexText> 
                <CardButton   onClick={clearAll} >Clear all matches</CardButton >
                </FlexMatch>
                <br/> {allLikes}
            </CardContainer>
        )
    }
export default Prof




