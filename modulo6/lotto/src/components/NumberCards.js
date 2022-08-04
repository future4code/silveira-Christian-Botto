
import React from "react";
import styled from "styled-components";

const DivCards = styled.div`
  height:111.2px;
  width: 106.36px;
  background-color: #FFFFFF;  
  border-radius: 50%; 
  @media(max-width: 800px) {
  height:76px;
  width: 76px;
  }  
`

const DivText = styled.div`
text-align: center;
color: black;
font-weight: bold;
font-family: Monterrat;
font-size: 27px;
margin-top:35%;
@media(max-width: 800px) {
  font-size: 20px;
  }  
`

export default function NumberCards(props) {
  return (
    <DivCards>
      <DivText>
        {props.no}
      </DivText>
    </DivCards>
  )
}
