// React
import React, { useEffect, useState } from "react";

// Axios
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

// Hooks
import { useProtectedPage } from "../../hooks/useProtectedPage";

// Components
import CardRestaurants from "../../components/CardRestaurants/CardRestaurants";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Order from "../../components/Order/Order"

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../../redux/orderSlice";

// Styles
import { MainContainer, CardRest, Input, DivMenu, MenuItem } from "./styled";

// App
const HomePage = () => {

    // Hooks
    useProtectedPage()

    // States and Constants
    const [restaurants, setRestaurants] = useState()
    const [inputText, setInputText] = useState("")
    const [categories, setCategories] = useState([])
    const [valueCategories, setValueCategories] = useState("")

    const { order } = useSelector(state => state.order)
    const dispatch = useDispatch()
    

    //Functions
    const getRestaurants = () => {
        const url = `${BASE_URL}restaurants`
        const token = localStorage.getItem('token')
        axios
            .get(url, {
                headers: { auth: token }
            })
            .then((response) => {
                setRestaurants(response.data.restaurants)
                categoryFilter(response.data.restaurants)
            })
            .catch((error) => {
            })
    }

    const categoryFilter = (restaurants) => {
        const arrAux = []
        restaurants && restaurants.map((restaurant) => {
            arrAux.push(restaurant.category)
        })
        const removeRepeats = [... new Set(arrAux)]

        
        const changeObjArr = []

        removeRepeats.map ((category) => {
            const insertObj = {category, selected:false}
            changeObjArr.push(insertObj)
        })
        setCategories(changeObjArr)
    }

    const changeCategory = (category) => {
        setValueCategories(category)

        const result = categories.map((cat) => {
            if (cat.category === category)  {
                return {
                    ...cat,
                    selected: true
                }
            }else {
                return {
                    ...cat,
                    selected: false
                }
            }
        })
        setCategories(result)
    }

    const getOrder = () => {
        const url = `${BASE_URL}active-order`
        const token = localStorage.getItem('token')
        axios
            .get(url, {
                headers: { auth: token }
            })
            .then((response) => {
                dispatch(setOrder(response.data.order))
                const expiresAt = response.data.order.expiresAt

                setTimeout(() => {
                    getOrder()
                }, expiresAt - new Date().getTime())
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // Use Effect
    useEffect(() => {
        getRestaurants()
    }, [])

    useEffect(() => {
        getOrder()
    }, [])


    

    // Render
    const restaurantMap = restaurants && restaurants
        .filter((restaurant) =>
            inputText ?
                restaurant.name.toLowerCase().includes(inputText.toLowerCase()) :
                true // returns everything
        )
        .filter((restaurant) =>
            valueCategories ?
                restaurant.category.toLowerCase().includes(valueCategories.toLowerCase()) :
                true // returns everything
        )
        .map((restaurant) => {
            return (
                <CardRestaurants
                    restaurant={restaurant}
                />
            )
        })


    // App
    return (
        <MainContainer>
            <Header title={"iFuture"} />
            <CardRest>
                <Input
                    value={inputText}
                    onChange={(event) => setInputText(event.target.value)}
                />
                <DivMenu>
                    <MenuItem
                        onClick={() => setValueCategories("")}
                    >
                        {"All"}
                    </MenuItem>
                   
                    {categories.map((category) => {
                        return <MenuItem
                            selected={category.selected}
                            onClick={() => changeCategory(category.category)}
                        >
                            {category.category}
                        </MenuItem>
                    })}

                </DivMenu>
                {restaurantMap}
            </CardRest>
            {order && <Order restaurantName={order.restaurantName} total = {order.totalPrice} />}
            <Menu page={"home"} />
        </MainContainer>
    )
}

export default HomePage