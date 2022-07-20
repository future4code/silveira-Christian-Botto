
import React from "react";
import styled from "styled-components";

const DivCards = styled.div`
  height:25px;
  width: 25px;
  background-color: #FFFFFF;  
  border-radius: 50%; 
`

const DivText = styled.div`
text-align: center;
margin:auto;
color: black;
font-weight: bold;
font-family: Monterrat;
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
