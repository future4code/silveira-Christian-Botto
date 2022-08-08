// React
import React, { useState } from "react";

// Hooks
import { useForm } from "../../hooks/useForm";

// Axios
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

// Router
import { useNavigate } from "react-router-dom";
import { goToRegisterPage } from "../../router/coordinator"

// Styles
import { MainContainer, Form, ButtonStyled, DivPass, TextFieldStyled } from "./styled";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// App

const SignUpPage = () => {

    // States and Constants
    const { form, onChange, cleanFields } = useForm({
        "name": "",
        "email": "",
        "cpf": "",
        "password": ""
    })

    const [showPassword, setShowPassowrd] = useState(false)

    const navigate = useNavigate()

    // Functions
    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp()
    }

    const onClickPasswordIcon = () => {
        setShowPassowrd(!showPassword)
    }

    const signUp = async () => {
        const url = `${BASE_URL}signup`
        const body = form
        await axios
            .post(url, body)
            .then((response) => {
                console.log(response.data)
                localStorage.setItem('token', response.data.token)
                alert(`Welcome, ${response.data.user.name}`)
                goToRegisterPage(navigate)
            })
            .catch((error) => {
                alert("Error")
            })
    }

    return (
        <MainContainer>
            <p>Sign up</p>

            <Form onSubmit={onSubmitForm}>
            <TextFieldStyled
                id="outlined-basic"
                label="Name"
                name="name"
                type={"text"}
                variant="outlined"
                placeholder="Your name"
                value={form.name}
                onChange={onChange}
                required
            />
            <TextFieldStyled
                id="outlined-basic"
                label="Email"
                name="email"
                type={"email"}
                variant="outlined"
                placeholder="Your e-mail"
                value={form.email}
                onChange={onChange}
                required
            />
            <TextFieldStyled
                id="outlined-basic"
                label="Cpf"
                name="cpf"
                type={"text"}
                variant="outlined"
                placeholder="Your ID (11 numbers)"
                value={form.cpf}
                onChange={onChange}
                required
            />
            <DivPass>
                <TextFieldStyled
                    id="outlined-basic"
                    label="Password"
                    name="password"
                    type={showPassword ? "password" : "text"}
                    variant="outlined"
                    placeholder="******"
                    value={form.password}
                    onChange={onChange}
                    required
                    inputProps={{ minLength: 6, title: "Must be at least 6 characters long" }}
                />
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={onClickPasswordIcon}
                    edge="end"
                >
                    {showPassword ? <VisibilityOff /> : < Visibility />}
                </IconButton >
            </DivPass>
            <ButtonStyled type='submit'>Sign up</ButtonStyled>
            </Form>
        </MainContainer>
    )
}

export default SignUpPage