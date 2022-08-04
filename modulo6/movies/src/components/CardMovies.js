// Libraries
import React from "react";

// Style
import styled from "styled-components";

const MainContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 210px;
  height: 410px;
  cursor:pointer;
  text-align: center;
  :hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  transform: scale(1.1); 
}
`

const SubContainer = styled.div`
  padding-top:90px;
`
const Poster = styled.img`
width: 200px;
height: 300px;
`

const H5 = styled.h4`
color:#646464;
`





const CardMovies = (props) => {
    return (
        <MainContainer onClick ={props.onClick}>
            <Poster src={props.poster} />
            <h4>{props.title}</h4>
            <H5>{props.release}</H5>
        </MainContainer>
    )
}

export default CardMovies