
import axios from "axios";
import {BASE_URL} from "../constants/urls"

export const login= (body, clear, navigate) => {
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
        })
        .catch((error) => {
            alert("error")
        })
}

export const signup= (body, clear, navigate) => {
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
        })
        .catch((error) => {
            alert("error")
            console.log(error.response)
        })
}