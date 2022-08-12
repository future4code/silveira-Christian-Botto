import styled from "styled-components";

import { subColor } from "../../constants/colors";

export const BoxStyled = styled.div`
background-color: #ffffff;
display: flex;
flex-direction: column;
padding: 2rem 1rem 0 1rem;
margin: 60% 1rem 50% 1rem;
`

export const Title = styled.h3`
margin: 1rem 0;
text-align: center;
`

export const Select = styled.select`
padding: 1rem;
border-radius: 4px;
border: solid 1px ${subColor};
margin: 1rem 0;
option{
    width: 100%;
}
`

export const Button = styled.button`
font-size: 1rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
text-align: right;
color: #4f81a8;
background-color: transparent;
border: 0;
outline: 0;
cursor: pointer;
text-transform: uppercase;
margin: 1rem 0;
align-self: flex-end;
`