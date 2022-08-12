// React
import React, { useEffect } from "react";

// Components
import Header from "../../components/Header/Header";

// Axios
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

// Router
import { useNavigate } from "react-router-dom";
import { goToProfilePage } from "../../router/coordinator";

// Hooks
import { useForm } from "../../hooks/useForm";
import { useRequestData } from "../../hooks/useRequestData";
import { useProtectedPage } from "../../hooks/useProtectedPage";

// Styles
import { MainContainer, Form, ButtonStyled, TextFieldStyled } from "./styled";



// App
const EditAddressPage = () => {

    // Hooks
    useProtectedPage()

    // States and Constants
    const { form, onChange, cleanFields, setForm } = useForm({
        "street": "",
        "number": "",
        "neighbourhood": "",
        "city": "",
        "state": "",
        "complement": ""
    })

    const navigate = useNavigate()

    const addressAux = useRequestData([], `${BASE_URL}profile/address`)
    const address = addressAux[0].address


    //Functions
    const onSubmitForm = (event) => {
        event.preventDefault()
        editAddress()
    }

    const editAddress = async () => {
        const url = `${BASE_URL}address`
        const body = form
        const token = localStorage.getItem('token')
        await axios
            .put(url, body, {
                headers: { auth: token }
            })
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                goToProfilePage(navigate)
            })
            .catch((error) => {
                alert("Error")
                console.log(error)
            })
    }

    const getAddress = async () => {
        const url = `${BASE_URL}profile/address`
        const token = localStorage.getItem('token')
        await axios
            .get(url,  {
                headers: { auth: token }
            })
            .then((response) => {
                setForm({
                    "street":  response.data.address.street,
                    "number": response.data.address.number,
                    "neighbourhood": response.data.address.neighbourhood,
                    "city": response.data.address.city,
                    "state": response.data.address.state,
                    "complement": response.data.address.complement,
                })
            })
            .catch((error) => {
                alert("Error")
                console.log(error)
            })
    }

    // Use Effect

    useEffect(() => {
        getAddress()
    }, [])




    return (
        <MainContainer>
            <Header title={"Address"} back />

            <Form onSubmit={onSubmitForm}>
                <TextFieldStyled
                    id="outlined-basic"
                    label="Street" // {address && address.street}
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

export default EditAddressPage