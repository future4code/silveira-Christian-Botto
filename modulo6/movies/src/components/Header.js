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
    background: #5C16C5;
    height: 56px;
    width: 100vw;
    img {
        padding-left: 30px;
        padding-top: 14px;
        cursor: pointer;
        height:30px;
        width: 60vw;
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