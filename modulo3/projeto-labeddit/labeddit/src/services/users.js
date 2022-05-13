
import axios from "axios";
import {BASE_URL} from "../constants/urls"

export const login= (body, clear, navigate, setLogButton) => {
    const url = (`${BASE_URL}/users/login`)
    const headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios
        .post(url, body, headers)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            clear()
            navigate("/");
            setLogButton("LOGOUT")
        })
        .catch((error) => {
            alert("error")
        })
}

export const signup= (body, clear, navigate, setLogButton )  => {
    const url = (`${BASE_URL}/users/signup`)
    const headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios
        .post(url, body, headers)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            clear()
            navigate("/");
            setLogButton("LOGOUT")
        })
        .catch((error) => {
            alert("error")
        })
}