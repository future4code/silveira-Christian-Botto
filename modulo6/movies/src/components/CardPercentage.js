// Libraries
import React from "react";

// Style
import styled from "styled-components";

const MainContainer = styled.div``

const PercentContainer = styled.div`
  --progress: ${(p) => (p.score/100)*360}deg;
  display: flex;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: conic-gradient(#14FF00 var(--progress), #9370db 0deg);
  font-size: 0;  
 :after {
  content: attr(data-progress) '%';
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 10px;
  border-radius: 50%;
  background: #800080;
  font-size: 1rem;
  text-align: center;
  color:#14FF00;
}
`

const CardPercentage = (props) => {
  return (
    <MainContainer >
      <PercentContainer data-progress={props.dataProgress} score = {props.score} />  
    </MainContainer >
  )
}

export default CardPercentage