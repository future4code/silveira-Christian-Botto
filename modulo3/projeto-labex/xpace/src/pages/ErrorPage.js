import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Gif from '../img/error.gif'

const GifDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 20vh;
` 

const ErrorPage = () => {

    const navigate = useNavigate()

    const goToListPage = (page) => {
        navigate(page)
    }

    return (
        <GifDiv>
            <img src={Gif} alt='gif' width='100px' />
            <button onClick={() => goToListPage("/")} > home</button>
        </GifDiv>
    );
}

export default ErrorPage
