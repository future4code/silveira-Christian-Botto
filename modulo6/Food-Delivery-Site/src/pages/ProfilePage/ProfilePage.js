// React
import React, { useState, useEffect } from "react";

// Components
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import CardHistory from "../../components/CardHistory/CardHistory";

// Axios
import axios from "axios";
import { BASE_URL } from "../../constants/urls";


// Router
import { Navigate, useNavigate } from "react-router-dom";
import { goToEditProfilePage, goToEditAddressPage, goToLoginPage } from "../../router/coordinator";

// Hooks
import { useRequestData } from "../../hooks/useRequestData";
import { useProtectedPage } from "../../hooks/useProtectedPage";


// Styles
import { MainContainer, Info, Profile, Address, History, Logout } from "./styled";
import { EditStyled } from "./styled";
import { Button } from "@mui/material";




// App

const ProfilePage = () => {

    // States and Constants
    const profile = useRequestData([], `${BASE_URL}profile`)
    const user = profile[0].user
    const [history, setHistory] = useState([])

    const navigate = useNavigate()

    // Hooks
    useProtectedPage()

    // Requests

    const getHistory = async () => {
        const url = `${BASE_URL}orders/history`
        const token = localStorage.getItem('token')
        await axios
            .get(url, {
                headers: { auth: token }
            })
            .then((response) => {
                console.log(response.data)
                setHistory(response.data)
            })
            .catch((error) => {
                alert("Error")
                console.log(error)
            })
    }

    const logout = () => {
        window.localStorage.removeItem('token')
        goToLoginPage(navigate)
    }

   

    // Use Effect

    useEffect(() => {
        getHistory()
    }, [])

    // Render
    const historyMap = history.orders && history.orders.map((hist) => {
        return (
            <CardHistory
                key={hist.createdAt}
                restaurantName={hist.restaurantName}
                totalPrice={hist.totalPrice}
                createdAt = {hist.createdAt}
            />
        )
    })


    return (
        <MainContainer>
            <Header title={"My Profile"} />
            <Logout>
            <Button onClick={() => logout()}>Logout</Button>
            </Logout> 
            <Info>
                <Profile>
                    <div>
                        <p>{user && user.name}</p>
                        <p>{user && user.email}</p>
                        <p>{user && user.cpf}</p>
                    </div>


                    <div>
                        <EditStyled onClick={() => goToEditProfilePage(navigate, user.id)} />
                    </div>
                </Profile>
                <Address>
                    <div>
                        <h4>Address</h4>
                        <p><p>{user && user.address}</p></p>
                    </div>
                    <div >
                        <EditStyled onClick={() => goToEditAddressPage(navigate, user.id)} />
                    </div>
                </Address>
                <History>History</History>
                <hr/>
                {historyMap && historyMap.length !==0 ? historyMap : <h3>No orders placed yet</h3>}
            </Info>
            <Menu page={"profile"} />^
        </MainContainer>
    )
}

export default ProfilePage