import React, { useState } from "react";
import { Button, outlinedInputClasses, TextField } from "@mui/material";
import useForm from "../../hooks/useForm"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {  InputsContainer} from "./styled";
import {BASE_URL} from "../../constants/urls"
import { signup } from "../../services/users";


const SignUpForm = () => {
    const navigate = useNavigate()

    const { form, onChange, clear } = useForm({
        username: "",
        email: "",
        password: ""
    });

    const onSubmitForm = (event) => {
        event.preventDefault()
        signup(form, clear, navigate)
    }

    return (
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                <TextField
                        name={"username"}
                        value={form.username}
                        onChange={onChange}
                        placeholder="Username"
                        required
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        type={"text"}
                    />
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
                       SIGNUP
                    </Button>
                </form>
            </InputsContainer>
    )
}
export default SignUpForm




