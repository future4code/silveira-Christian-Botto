import styled from "styled-components";

import { mainColor } from "../../constants/colors";
import { subColor } from "../../constants/colors";

export const MainContainer = styled.div`
width: 60%;
margin: 0.5rem 0;
display: flex;
flex-direction: column;
border: solid 1px ${subColor};
border-radius: 7px;
margin: auto;
`


export const DivTitle = styled.h3`
color:  ${mainColor};
padding-left: 10px;
`
export const DivDate = styled.h4`
padding-left: 10px;
`

export const DivTotal = styled.h2`
padding-left: 10px;
font-weight: bold;
`

