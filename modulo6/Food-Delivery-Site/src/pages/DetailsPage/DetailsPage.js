// React
import React, { useEffect, useState } from "react";

// Hooks
import { useParams } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";

// Axios
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

// Components
import CardDetails from "../../components/CardDetails/CardDetails";
import CardProduct from "../../components/CardProduct/CardProduct";
import Header from "../../components/Header/Header";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

// Styles
import { MainContainer, CardRest, BoxCategory, Category } from "./styled";




// App

const DetailsPage = () => {

    // Hooks
    useProtectedPage()

    // States and Constants
    const params = useParams()
    const restaurantID = params.id
    const [restaurant, setRestaurant] = useState({})
    const [categories, setCategories] = useState([])

    const { cart } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    // Functions
    const getRestaurant = () => {
        const url = `${BASE_URL}restaurants/${restaurantID}`
        const token = localStorage.getItem('token')
        axios
            .get(url, {
                headers: { auth: token }
            })
            .then((response) => {
                setRestaurant(response.data.restaurant)
            })
            .catch((error) => {
                // alert("Error")
                console.log(error)
            })
    }

    // Use Effect
    useEffect(() => {
        getRestaurant()
    }, [])

    useEffect(() => {
        if (restaurant.products) {
            const newCategories = []
            for (const product of restaurant.products) {
                if (!newCategories.includes(product.category)) {
                    newCategories.push(product.category)
                }
            }
            setCategories(newCategories)
        }
    }, [restaurant])


    // Render

    const producstMap = restaurant.products && restaurant.products.map((product) => {
        return (
            <CardProduct
                key={product.id}
                product={product}
            />
        )
    })


    return (
        <MainContainer>
            <Header title={"iFuture"}  back/>
            <CardRest>
                <CardDetails restaurant={restaurant}/>
                {
                    restaurant.products
                    &&
                    categories.map((category) => {
                        return <BoxCategory>
                            <Category>{category}</Category>
                            {
                                restaurant.products
                                .filter((product) => {
                                    return product.category ===category
                                })
                                .map((product) => {
                                    return (
                                        <CardProduct
                                            key={product.id}
                                            product={product}
                                            addToCart = {addToCart}
                                            rest={restaurant}
                                        />
                                    )
                                })
                                
                            }
                        </BoxCategory>
                    })
                }
            </CardRest>
        </MainContainer>
    )
}

export default DetailsPage