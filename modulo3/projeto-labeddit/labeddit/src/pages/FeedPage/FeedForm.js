import React, { useState } from "react";
import useForm from "../../hooks/useForm"
import { useNavigate } from "react-router-dom";
import { post } from "../../services/posts";
import {  InputsContainer, LoginFormContainer} from "./styled";
import { Button, outlinedInputClasses, TextField } from "@mui/material";

const FeedForm = () => {
    const navigate = useNavigate()

    const { form, onChange, clear } = useForm({
        title: "",
       body: ""
    });    

    const onSubmitForm = (event) => {
        event.preventDefault()
        post(form, clear, navigate)
    }


    return (
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"title"}
                        value={form.title}
                        onChange={onChange}
                        placeholder="Title"
                        required
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        type={"text"}
                    />
                    <TextField
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        placeholder="Body"
                        type={"text"}
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
                        Submit
                    </Button>
                </form>
            </InputsContainer>
    )
}
export default FeedForm




