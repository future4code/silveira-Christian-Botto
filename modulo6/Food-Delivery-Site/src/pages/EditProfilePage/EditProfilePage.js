// React
import React, { useEffect, useState } from "react";

// Components
import Header from "../../components/Header/Header";

// Hooks
import { useRequestData } from "../../hooks/useRequestData";
import { useProtectedPage } from "../../hooks/useProtectedPage";

// Axios
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

// Router
import { useNavigate } from "react-router-dom";
import { goToProfilePage } from "../../router/coordinator";

// Styles
import { MainContainer, Form, ButtonStyled, DivPass, TextFieldStyled } from "./styled";


// App
const EditProfilePage = () => {

    // Hooks
    useProtectedPage()


    // States and Constants  
    const profile = useRequestData([], `${BASE_URL}profile`)
    const user = profile[0].user

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')

    const navigate = useNavigate()


    // Functions
    const onSubmitForm = (event) => {
        event.preventDefault()
        editProfile()
    }

    const editProfile = async () => {
        const url = `${BASE_URL}profile`
        const token = localStorage.getItem('token')
        const body = {
            name,
            email,
            cpf
        }
        await axios
            .put(url, body, {
                headers: { auth: token }
            })
            .then((response) => {
                alert(`Profile ipdated`)
                goToProfilePage(navigate)
            })
            .catch((error) => {
                alert("Error")
                console.log(error)
            })
    }

    const getInfo = async () => {
        const url = `${BASE_URL}profile`
        const token = localStorage.getItem('token')
        await axios
            .get(url, {
                headers: { auth: token }
            })
            .then((response) => {
                setName(response.data.user.name)
                setEmail(response.data.user.email)
                setCpf(response.data.user.cpf)
            })
            .catch((error) => {
                alert(error)
            })
    }

    // Use Effect

    useEffect(() => {
        getInfo()
    }, [])


    return (
        <MainContainer>
            <Header title={"Edit Profile"} back />


            <Form onSubmit={onSubmitForm}>
                <TextFieldStyled
                    id="outlined-basic"
                    name="name"
                    type={"text"}
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <TextFieldStyled
                    id="outlined-basic"
                    name="email"
                    type={"email"}
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <TextFieldStyled
                    id="outlined-basic"
                    name="cpf"
                    type={"text"}
                    variant="outlined"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    required
                />
                <ButtonStyled type='submit'>Edit Profile</ButtonStyled>
            </Form>
        </MainContainer>
    )
}

export default EditProfilePage