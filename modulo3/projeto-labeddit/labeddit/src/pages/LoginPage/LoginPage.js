import React from "react";
import { Button, TextField } from "@mui/material";
import useForm from "../../hooks/useForm"
import { useNavigate } from "react-router-dom";
import axios from "axios";



const LoginPage = () => {

    const navigate = useNavigate()

    const { form, onChange, cleanFields } = useForm({
        nome: "",
        idade: "",
        email: ""
    });


    const onSubmitForm = (event) => {
        event.preventDefault()

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/christian-cardeal-silveira/login"
        const body = {
            email: form.email,
            password: form.password
        }
        const headers = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        axios
            .post(url, body, headers)
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                navigate("/admin/trips/list");
            })
            .catch((error) => {
                alert("error")
            })
    }

    return (
        <div>
            <h2>LoginPage</h2>

            <form onSubmit={onSubmitForm}>
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                />
                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                />
            </form>
            <Button variant="contained" color="primary">
                Teste
            </Button>
        </div>
    )


}

export default LoginPage