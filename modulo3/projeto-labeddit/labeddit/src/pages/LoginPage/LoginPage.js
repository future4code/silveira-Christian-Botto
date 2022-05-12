import React, { useState } from "react";
import { Button, outlinedInputClasses, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ScreenContainer, SignUpButtonContainer } from "./styled";
import LoginForm from "./LoginForm"
import { goToSignUp } from "../../routes/coordinator";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";



const LoginPage = () => {
    useUnprotectedPage()

    const navigate = useNavigate()

    return (
        <ScreenContainer>
            <h2>LoginPage</h2>
            <LoginForm />
            <SignUpButtonContainer>
                <Button
                    onClick={() => goToSignUp(navigate)}
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    margin={"normal"}
                >
                    SIGNUP
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )


}

export default LoginPage




