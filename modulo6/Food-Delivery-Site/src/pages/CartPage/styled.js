import styled from "styled-components";

import { mainColor } from "../../constants/colors";

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
`

export const DivCart = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 5%;
font-size: 2rem;
`
export const DivCartConfig = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: 95%;
width: 100%;
`

export const DivInfoProfile = styled.div`
margin-top: 5px;
height: 10%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 1.2rem;
background-color: lightgray;
width: 100%;
`

export const DivInfoRestaurant = styled.div`
display: flex;
flex-direction: column;
width: 100%;
font-size: 1.2rem;
margin: 5px;
p:nth-child(1){
    color: ${mainColor}
};
p:nth-child(2){
    color: grey;
}
p:nth-child(3){
    color: grey;
}
`

export const DivInfoCart = styled.div`
margin-top: 10px;
display: flex;
flex-direction: column;
width: 100%;
`

export const DivEmptyCart = styled.div`
text-align: center;
font-size: 3rem;
`

export const DivPayment = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
padding-bottom: 50px;
p, label {
    font-size: 1.2rem;
}
`

export const DivShipping = styled.p`
display: flex;
justify-content: flex-end;
margin: 5px;
`

export const DivTotal = styled.div`
display: flex;
justify-content: space-between;
padding-bottom: 20px;
margin: 5px;
    font-size: 1.5rem;
`

export const DivPaymentMethod = styled.h3`
margin: 5px;
`

export const DivTotalAux = styled.div`
`

export const DivTotalAux2 = styled.div`
color:${mainColor}
`
export const Button = styled.button`
background-color:${mainColor};
width: 50%;
color: white;
margin: auto;
border-radius: 5px;
margin-top: 20px;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
div{
    margin:5px;
};
label{
font-size: 1.1rem;
text-transform: uppercase;
};
input{
    width: 20%;
    height: 20px;;
}
`