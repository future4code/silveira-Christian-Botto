// React
import React from "react";
import { useEffect } from "react";

// Routes
import { useNavigate } from "react-router-dom";
import { goToSearchPage } from "../../router/coordinator"

// Hooks
import { useDispatch, useSelector } from "react-redux";
import { addToHistory, cleanHistory, removeFromHistory, updateHistory } from "../../redux/historySlice";

// Components
import CardHistory from "../../components/CardHistory/CardHistory";

// Modal
import CardModal from "../../components/CardModal/CardModal";

// Style
import { MainContainer } from "./styled";
import { setUser } from "../../redux/userSlice";

// App
const HistoryPage = (props) => {

    

    // States and Constants
    const navigate = useNavigate()

    const { user } = useSelector(state => state.user)
    const { history } = useSelector(state => state.history)
    const dispatch = useDispatch()

    // console.log(typeof(history))
    console.log("history", history)
    console.log("user", user)

    // UseEffect
    useEffect(() => {
        if (history.length) {
            window.sessionStorage.setItem("history", JSON.stringify(history))
        }
    }, [history]);

    useEffect(() => {
        if (Object.keys(user).length) {
            window.sessionStorage.setItem("user", JSON.stringify(user))
        }
    }, [user]);
    
    useEffect(() => {
        const history = window.sessionStorage.getItem("history")
        const user = window.sessionStorage.getItem("user")
        if (history) {            
            const historyObj = JSON.parse(history)
            dispatch(updateHistory(historyObj))
        }
        if (user) {
            const userObj = JSON.parse(user)
            dispatch(setUser(userObj))
        }
    }, []);



    const historyMap = history && history.map((hist) => {
        return (
            <CardHistory
                key={hist}
                name={hist}
            />
        )
    })

    return (
        <MainContainer >
            HistoryPage
            <button onClick={() => goToSearchPage(navigate)}>Search Page</button>
            <button onClick={() => dispatch(cleanHistory())}>Clean History</button>

            {historyMap}

            <CardModal
                user={user.name}
                pic={user.avatar_url}
                bio={user.bio}
                email={user.email}
                login={user.login}
            />

        </MainContainer >
    )
}

export default HistoryPage