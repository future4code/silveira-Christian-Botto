// React
import React, { useState } from "react";

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
const LoginPage = () => {


    // States and Constants
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassowrd] = useState(false)

    const navigate = useNavigate()

    // Funcitons
    const onClickPasswordIcon = () => {
        setShowPassowrd(!showPassword)
    }

    const onSubmitLogin = (event) => {
        event.preventDefault()

        const userLogin = {
            email,
            password
        }
        login(userLogin)
    }

    const login = async (bd) => {
        const url = `${BASE_URL}login`
        const body = bd
        await axios
            .post(url, body)
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                alert(`Hello, ${response.data.user.name}`)
                goToHomePage(navigate)
            })
            .catch((error) => {
                alert("Error")
            })
    }


    return (
        <MainContainer>
            <p>Log in</p>

            <Form onSubmit={onSubmitLogin}>
                <TextFieldStyled
                    id="outlined-basic"
                    label="Email"
                    type={"email"}
                    variant="outlined"
                    placeholder="email@email.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
                <DivPass>
                    <TextFieldStyled
                        id="outlined-basic"
                        label="Password"
                        type={showPassword ? "password" : "text"}
                        variant="outlined"
                        placeholder="******"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
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
                <ButtonStyled type='submit'>Log in</ButtonStyled>
            </Form>
        </MainContainer>
    )
}

export default LoginPage