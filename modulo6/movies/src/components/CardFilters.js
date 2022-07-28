// Libraries
import React from "react";

// Style
import styled from "styled-components";

const MainContainer = styled.div`
padding:6px;
`

const Button = styled.button`
  background-color: ${(p) =>p.selected ? "	#FF69B4" : "#fbeee0"};
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 14px;
  padding: 0 14px;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :hover {
  background-color: 	#BA55D3;
}
:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}

`


const CardFilters = (props) => {
    return (
        <MainContainer >
            <Button selected={props.selectedFilters} onClick = {() => props.setGenreSelect(props.id)}> {props.name} </Button>
        </MainContainer >
    )
}

export default CardFilters