
import axios from "axios";
import {BASE_URL} from "../constants/urls"

export const post= (body, clear, navigate) => {
    const url = (`${BASE_URL}/posts`)
    const token = localStorage.getItem("token")
    const headers = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }
    axios
        .post(url, body, headers)
        .then((response) => {
            clear()
        })
        .catch((error) => {
            alert("error")
        })
}