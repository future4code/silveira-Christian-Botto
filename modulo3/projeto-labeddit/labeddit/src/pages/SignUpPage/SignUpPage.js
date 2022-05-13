import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScreenContainer} from "./styled";
import SignUpForm from "./SignUpForm"
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";

const SignUpPage = ( setLogButton ) => {
    useUnprotectedPage()
    
    const navigate = useNavigate()
    return (
        <ScreenContainer>
            <h2>SignUpPage</h2>
            <SignUpForm setLogButton = {setLogButton}  />
        </ScreenContainer>
    )
}
export default SignUpPage
