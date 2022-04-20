import React, { useState, useEffect} from "react";
import axios from "axios";
import { CardContainer, CardHeader, UserPhoto, CardPhoto, CardFooter, CommentContainer } from './styles'

const Home = (props) => {
    return (
        <CardContainer>
            matchmatch
            <button onClick={props.gotoProf}>Profile</button>
            <br/>
CHAMAR COMPONENTE CARD
<br/>
            <button>X</button>
            <button>S2</button>



        </CardContainer>
    )
}

export default Home