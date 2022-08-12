// React
import React, { useEffect, useState } from "react";

// Hooks
import { useRequestData } from "../../hooks/useRequestData";
import { useProtectedPage } from "../../hooks/useProtectedPage";

// Components
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import CardProduct from "../../components/CardProduct/CardProduct";

// Routes
import { goToHomePage } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";

// Axios
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../../redux/orderSlice";
import { cleanCart } from "../../redux/cartSlice";

// Styles
import {
    MainContainer, DivCartConfig, DivInfoProfile, DivInfoRestaurant,
    DivInfoCart, DivShipping, DivPayment, DivTotal, Form, DivEmptyCart,
    DivTotalAux, DivTotalAux2, DivPaymentMethod, Button
} from "./styled";




// App

const CartPage = () => {

     // Hooks
     useProtectedPage()

    // States and Constants
    const profile = useRequestData([], `${BASE_URL}profile`)
    const [payment, setPayment] = useState("")
    const paymentMethod = ["money", "creditcard"]

    const dispatch = useDispatch()
    const { cart } = useSelector(state => state.cart)
    const { restaurant } = useSelector(state => state.restaurant)
    const [total, setTotal] = useState(0)

    const navigate = useNavigate()

    // Functions
    const onChangePayment = (event) => {
        setPayment(event.target.value)
    }

    const totalPrice = () => {
        let totPrice = 0
        if (cart && restaurant) {
            for (const prod of cart) {
                totPrice += prod.product.price * prod.quantity
            }
        }
        totPrice = totPrice + restaurant.shipping
        setTotal(totPrice)
    }

    const placeOrder = (event) => {        
        const body = {
            products: cart.map((prod) => {
                return({
                    id: prod.product.id,
                    quantity: prod.quantity
                })
            }),
            paymentMethod: payment

        }
        const url = `${BASE_URL}restaurants/${restaurant.id}/order`
        const token = localStorage.getItem('token')
        axios
            .post(url, body, {
                headers: { auth: token }
            })
            .then((response) => {
                setOrder(response.data.order)
                alert("Success!")
                dispatch(cleanCart())
                goToHomePage(navigate)
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }

     const onSubmitPlaceOrder = (event) => {
        event.preventDefault()
        placeOrder()
     }

    // Use Effect
    useEffect(() => {
        totalPrice()
    }, [])


    return (
        <MainContainer>
            <Header title={"Cart"} />
            <DivCartConfig>
                <DivInfoProfile>
                    <p>Shipping Address</p>
                    <p>{profile[0].user && profile[0].user.address}</p>
                </DivInfoProfile>
                <DivInfoRestaurant>
                    <p>{Object.keys(cart).length !== 0 ? restaurant.name : ""}</p>
                    <p>{Object.keys(cart).length !== 0 ? restaurant.address : ""}</p>
                    {Object.keys(cart).length !== 0 ? <p> {restaurant.deliveryTime} min</p> : ""}
                </DivInfoRestaurant>
                <DivInfoCart>
                    {Object.keys(cart).length !== 0 ? cart.map((cart) => {
                        return (
                            <CardProduct
                                product={cart.product}
                                key={cart.product.id}
                                restaurant={restaurant}
                            />
                        )
                    }) : <DivEmptyCart>Empty Cart</DivEmptyCart>}
                </DivInfoCart>
                <DivPayment>
                    <DivShipping>
                        Delivery Fee: ${Object.keys(cart).length !== 0 ? restaurant.shipping : "0"}
                    </DivShipping>
                    <DivTotal>
                        <DivTotalAux>Total:</DivTotalAux>
                        <DivTotalAux2>${Object.keys(cart).length !== 0 ? total : "0"}</DivTotalAux2>
                    </DivTotal>
                    <DivPaymentMethod>Payment Method</DivPaymentMethod>
                    <hr />
                    <Form onSubmit={onSubmitPlaceOrder}>
                        {paymentMethod.map((key) => {
                            return (
                                <div key={key}>
                                    <input
                                        checked={payment === key}
                                        name={"paymentMethod"}
                                        id={key}
                                        type={"radio"}
                                        onChange={onChangePayment}
                                        value={key}
                                    />
                                    <label for={key} >{key}</label>
                                </div>
                            )
                        })}
                        <Button>Confirm</Button>
                    </Form>
                </DivPayment>
            </DivCartConfig>
            <Menu page={"cart"} />
        </MainContainer>
    )
}

export default CartPage