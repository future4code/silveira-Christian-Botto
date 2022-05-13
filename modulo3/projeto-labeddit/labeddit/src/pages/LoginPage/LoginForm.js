import React, { useState } from "react";
import { Button, outlinedInputClasses, TextField } from "@mui/material";
import useForm from "../../hooks/useForm"
import { useNavigate } from "react-router-dom";
import {  InputsContainer, LoginFormContainer} from "./styled";
import { login } from "../../services/users";



const LoginForm = ({setLogButton}) => {
    const navigate = useNavigate()

    const { form, onChange, clear } = useForm({
        email: "",
        password: ""
    });    

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, navigate, setLogButton)
    }


    return (
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        placeholder="E-mail"
                        required
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        type={"email"}
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        placeholder="Password"
                        type={"password"}
                        required
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        margin={"normal"}
                    >
                        LOGIN
                    </Button>
                </form>
            </InputsContainer>
    )
}
export default LoginForm




