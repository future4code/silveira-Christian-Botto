// React
import React from "react";

// Hooks
import { useForm } from "../../hooks/useForm";

// Axios
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

// Router
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../router/coordinator"

// Styles
import { MainContainer, Form, ButtonStyled, DivPass, TextFieldStyled } from "./styled";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// App
const RegisterPage = () => {

    // States and Constants
    const { form, onChange, cleanFields } = useForm({
        "street": "",
        "number": "",
        "neighbourhood": "",
        "city": "",
        "state": "",
        "complement": ""
    })

    const navigate = useNavigate()


    //Functions
    const onSubmitForm = (event) => {
        event.preventDefault()
        register()
    }

    const register = async () => {
        const url = `${BASE_URL}address`        
        const body = form
        const token = localStorage.getItem('token')
        await axios
            .put(url, body, {
                headers: {auth: token}
            })
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                goToHomePage(navigate)
            })
            .catch((error) => {
                alert("Error")
                console.log(error)
            })
    }

    return (
        <MainContainer>
        <p>Edit Address</p>

        <Form onSubmit={onSubmitForm}>
        <TextFieldStyled
            id="outlined-basic"
            label="Street"
            name="street"
            type={"text"}
            variant="outlined"
            placeholder="Street"
            value={form.street}
            onChange={onChange}
            required
        />
        <TextFieldStyled
            id="outlined-basic"
            label="Number"
            name="number"
            type={"number"}
            variant="outlined"
            placeholder="Number"
            value={form.number}
            onChange={onChange}
            required
        />
        <TextFieldStyled
            id="outlined-basic"
            label="Neighbourhood"
            name="neighbourhood"
            type={"text"}
            variant="outlined"
            placeholder="Neighbourhood"
            value={form.neighbourhood}
            onChange={onChange}
            required
        />
        <TextFieldStyled
            id="outlined-basic"
            label="City"
            name="city"
            type={"text"}
            variant="outlined"
            placeholder="City"
            value={form.city}
            onChange={onChange}
            required
        />
        <TextFieldStyled
            id="outlined-basic"
            label="State"
            name="state"
            type={"text"}
            variant="outlined"
            placeholder="State"
            value={form.state}
            onChange={onChange}
            required
        />
        <TextFieldStyled
            id="outlined-basic"
            label="Complement"
            name="complement"
            type={"text"}
            variant="outlined"
            placeholder="Complement - Optional"
            value={form.complement}
            onChange={onChange}
        />
        <ButtonStyled type='submit'>Edit Address</ButtonStyled>
        </Form>
    </MainContainer>
    )
}

export default RegisterPage