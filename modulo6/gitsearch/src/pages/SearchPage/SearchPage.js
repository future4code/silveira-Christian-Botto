// React
import React, { useState } from "react";

// Routes
import { useNavigate } from "react-router-dom";
import {goToHistoryPage} from "../../router/coordinator"

// Hooks
import useForm from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { addToHistory } from "../../redux/historySlice";

// Requests
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

// Style
import { MainContainer } from "./styled";

// App
const SearchPage = () => {

    // States and Constants
    const navigate = useNavigate()

    const { form, onChange, cleanFields } = useForm({
        user: ""
    });
    
    const [user, setUser] = useState(form && form.user)        

    const {history} = useSelector(state => state.history)
    const dispatch = useDispatch()
    

    console.log("input: ", form && form.user)
    console.log("user: ",user)
    console.log("history: ",history)

    // Requests

    // Functions
    const onSubmitForm = (event) => {
        event.preventDefault();
        const url = (`${BASE_URL}${form.user}`)
        axios.get(url)
            .then((response) => {
                setUser(response.data)  
                dispatch(addToHistory(form.user))
                cleanFields()  
            })
            .catch((error) => {
                alert("Can't load data, refresh your browser")
            })
    }






return (
    <MainContainer >
        <form onSubmit={onSubmitForm}>
            <input
                name={"user"}
                value={form.user}
                onChange={onChange}
                placeholder="User"
                required
            />
            <button>Search</button>
        </form>
        <button onClick={() => goToHistoryPage(navigate)}>History Page</button>
        
        {user.name}

    </MainContainer >
)
}

export default SearchPage