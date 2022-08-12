import styled from "styled-components";

import { ReactComponent as Edit } from "../../assets/edit.svg"

import { mainColor } from "../../constants/colors";

export const MainContainer = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
`


export const Info = styled.div`
height: 100%;
display: flex;
flex-direction: column;
`

export const Profile = styled.div`
height: 20%;
display: flex;
justify-content: space-between;
div:nth-child(1){
    width: 80%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
div:nth-child(2){
    width: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
}
`

export const Address = styled.div`
height: 10%;
background-color: lightgray;
display: flex;
justify-content: space-between;
div:nth-child(1){
    width: 80%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
div:nth-child(2){
    width: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
}
`


export const History = styled.h3`
padding: 10px;

`

export const EditStyled = styled(Edit)`
`

export const Logout = styled.div`
color:${mainColor};
display: flex;
justify-content: flex-end;
padding: 15px;

`

