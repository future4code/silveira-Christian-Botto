import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardContainer} from './styles'


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
                <button onClick={props.gotoHome}>Profile</button>
                matchmatch
                <button onClick={clearAll} >Clear all mathes</button>
                <br/> {allLikes}
            </CardContainer>
        )
    }
export default Prof




