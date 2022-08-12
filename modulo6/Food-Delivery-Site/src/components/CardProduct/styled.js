import styled from "styled-components";

import { mainColor } from "../../constants/colors";
import { subColor } from "../../constants/colors";

export const MainContainer = styled.div`
width: 100%;
margin: 0.5rem 0;
display: flex;
border: solid 1px ${subColor};
border-radius: 7px;
`

export const IMG = styled.img`
border-radius: 12px 12px 0 0;
width: 6rem;
height: 7rem;
`
// Name Quantity
export const NameQuantity = styled.div`
display: flex;
justify-content: space-between;
`
export const Quantity = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: solid 1px ${mainColor};
width: 2.063rem;
height: 2.063rem;
border-radius: 8px 0 8px 0;
color: ${mainColor};
`
export const Name = styled.h3`
font-family: Roboto;
font-size: 1rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: ${mainColor};
padding-bottom: 0.25rem;
padding-top: 1rem;
`



export const BoxInfo = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
padding: 0 0 0 1rem;
flex-grow: 1;
`
export const Info = styled.p`
font-family: Roboto;
font-size: 1rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
color: ${subColor};
letter-spacing: -0.39px;
padding: 0.25rem 0;
flex-grow: 1;
`

export const PriceButton = styled.div`
display: flex;
justify-content: space-between;
`
export const Price = styled.p`
`
export const AddButton = styled.button`
width: 5.625rem;
height: 1.938rem;
border-radius: 8px 0 8px 0;
background-color: white;
outline: 0;
border: 1px black solid;
`
export const RemoveButton = styled(AddButton)`
border: 1px ${mainColor} solid;
color: ${mainColor};
`




