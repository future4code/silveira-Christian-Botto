import styled from "styled-components";

import { ReactComponent as Clock } from "../../assets/clock.svg"

import { mainColor } from "../../constants/colors";

export const MainContainer = styled.div`
display: flex;
align-items: center;
height: 7.375rem;
position: fixed;
bottom: 3.062rem;
width: 100%;
background-color: ${mainColor};
z-index: 1;
padding: 0 0 0 2rem;
`

export const MenuSpacer = styled.div`
height: 3.062rem;
`


export const ClockStyled = styled(Clock)``

export const BoxInfo = styled.div`
padding-left: 10px;
`

export const Title = styled.h3`
font-family: Montserrat;
font-size: 1rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #fff;
padding: 0.25rem;
`

export const Name = styled.p`
font-family: Montserrat;
font-size: 1rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #000;
padding: 0.25rem;
`
export const Total = styled.p`
font-family: Montserrat;
font-size: 1rem;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
padding: 0.25rem;

`