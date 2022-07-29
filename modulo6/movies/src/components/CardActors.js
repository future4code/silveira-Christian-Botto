// Libraries
import React from "react";

// Style
import styled from "styled-components";

const MainContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); 
   transition: 0.3s;
  width: 160px;
  height: 350px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
`
const Poster = styled.img`
width: 150x;
height: 225px;
`

const H5 = styled.h4`
color:black;
font-weight: 300;
`





const CardActors= (props) => {
    return (
        <MainContainer>
            <Poster src={props.pic} />
            <h4>{props.actor}</h4>
            <H5>{props.character}</H5>
        </MainContainer>
    )
}

export default CardActors