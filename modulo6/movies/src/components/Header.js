// Libraries
import React from "react";

// Routes
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../router/coordinator";

// Assets
import TMDB from "../assets/tmdb.svg"

// Style
import styled from "styled-components";

const HeaderStyled = styled.header`
    background: 		#4B0082;
    height: 56px;
    width: 100vw;
    img {
        padding-top: 14px;
        cursor: pointer;
        height:30px;
        padding-left: 5vw;
    }    
`

const Header = () => {

    const navigate = useNavigate()

    return (
        <HeaderStyled>
            <img src={TMDB} onClick={() => goToHomePage(navigate)} />
        </HeaderStyled>
    )
}

export default Header