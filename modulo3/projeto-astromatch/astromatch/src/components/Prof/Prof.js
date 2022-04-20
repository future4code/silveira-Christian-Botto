import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardContainer, CardHeader, UserPhoto, CardPhoto, CardFooter, CommentContainer } from './styles'


const Prof = (props) => {
    const clearAll = () => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/christian-silveira/clear'
        if (window.confirm(`Do you really want to clear your matches?`)) {
            axios
                .put(url)
                .then((response) => {
                    alert(`Cleared successfully!`)
                })
                .catch((error) => {
                    alert(error.response.data)
                })
        }
    }




    return (
        <CardContainer>
            <button onClick={props.gotoHome}>Profile</button>
            matchmatch
            <button onClick={clearAll} >Clear all mathes</button>
            Lista renderizada de profiles
        </CardContainer>
    )
}

export default Prof




