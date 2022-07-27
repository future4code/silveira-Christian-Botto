// Libraries
import React from "react";

// Style
import styled from "styled-components";

const MainContainer = styled.div`
padding-left: 7px;
padding-right: 7px;
`

const Button = styled.button`
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  font-weight: 600;
  font-size: 11px;
  padding: 0 11px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  :hover {
  background-color: 	#BA55D3;
}
:active {
  background-color: 	#FFB6C1;
}
`


const CardNextPrevious = (props) => {
    return (
        <MainContainer >
            <Button onClick={() => props.onClickPagination(props.number)}> {props.name} </Button>
        </MainContainer >
    )
}

export default CardNextPrevious