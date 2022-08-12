import styled from "styled-components";
import { Button, TextField } from "@mui/material";
import { mainColor } from "../../constants/colors";


export const MainContainer = styled.div`
padding: 10px;
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
p{
    font-size: 2rem;
}
`

export const Form = styled.form `
display: flex;
flex-direction: column;
height:60%;
width:90%;
justify-content: space-evenly;
`

export const ButtonStyled = styled(Button)`
&&{
    width: 100%;
    background-color: ${mainColor};
    color: black
}
`

export const DivPass = styled.div`
display: flex;
align-items: center;
justify-content: space-between
;
`

export const TextFieldStyled = styled(TextField)`
width: 100%;
`