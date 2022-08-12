// Reaxt
import { useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, addToCartNew } from "../../redux/cartSlice";
import { setRestaurant } from "../../redux/restaurantSlice";

// Styles
import ModalStyled from "../ModalStyled/ModalStyled"
import {
    MainContainer, IMG, BoxInfo, Info, Name, RemoveButton,
    NameQuantity, Quantity, PriceButton, AddButton, Price
} from "./styled"

// App
const CardProduct = ({ product, rest }) => {

    // States and Constants
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state.cart)
    const { restaurant } = useSelector(state => state.restaurant)

    // Function
    const chooseQuantity = (qnt) => {
        if (rest === restaurant) {
            dispatch(addToCart({ product: product, quantity: qnt }))
            setShowModal(false)
        } else {
            dispatch(setRestaurant(rest))
            dispatch(addToCartNew({ product: product, quantity: qnt }))
            setShowModal(false)
        }
    }

    const productInCart = cart.find((prodCart) => prodCart.product.id === product.id)

    return (
        <MainContainer>
            <IMG src={product.photoUrl} />
            <BoxInfo>
                <NameQuantity>
                    <Name>{product.name} </Name>
                    {productInCart ? <Quantity>{productInCart.quantity}</Quantity> : false}
                </NameQuantity>
                <Info>{product.description}</Info>
                <PriceButton>
                    <Price>
                        ${product.price}
                    </Price>
                    {
                        productInCart
                            ?
                            <RemoveButton onClick={() => dispatch(removeFromCart(product.id))} >
                                Remove
                            </RemoveButton>
                            :
                            <AddButton onClick={() => setShowModal(true)} >
                                Add to cart
                            </AddButton>
                    }
                </PriceButton>

                <ModalStyled
                    open={showModal}
                    setOpen={setShowModal}
                    chooseQuantity={chooseQuantity}
                />
            </BoxInfo>
        </MainContainer>
    )
}

export default CardProduct