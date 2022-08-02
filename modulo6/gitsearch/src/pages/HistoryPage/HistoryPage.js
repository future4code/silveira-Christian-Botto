// React
import React from "react";

// Routes
import { useNavigate } from "react-router-dom";
import {goToSearchPage} from "../../router/coordinator"

// Hooks
import { useDispatch, useSelector } from "react-redux";
import { addToHistory } from "../../redux/historySlice";

// Style
import { MainContainer } from "./styled";

// App
const HistoryPage = (props) => {

    // States and Constants
    const navigate = useNavigate()

    const {history} = useSelector(state => state.history)
    const dispatch = useDispatch()

    console.log("history: ",history)

    return (
        <MainContainer >
            HistoryPage
            <button onClick={() => goToSearchPage(navigate)}>Search Page</button>

        </MainContainer >
    )
}

export default HistoryPage