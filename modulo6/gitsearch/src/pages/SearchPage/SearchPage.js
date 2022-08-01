// React
import React, { useState } from "react";

// Hooks
import useForm from "../../hooks/useForm";

// Requests
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

// Style
import { MainContainer } from "./styled";

// App
const SearchPage = () => {

    // States and Constants
    const { form, onChange, cleanFields } = useForm({
        user: ""
    });
    
    const [user, setUser] = useState(form && form.user)
    console.log(form && form.user)
    console.log(user)

    // Requests

    // Functions
    const onSubmitForm = (event) => {
        event.preventDefault();
        const url = (`${BASE_URL}${form.user}`)
        axios.get(url)
            .then((response) => {
                setUser(response.data)  
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
        
        {user.name}

    </MainContainer >
)
}

export default SearchPage