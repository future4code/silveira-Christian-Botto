import { useNavigate } from "react-router-dom"
import { goToDetailsPage } from "../../router/coordinator"
// Styles
import { MainContainer, IMG, BoxInfo, Info, Name } from "./styled"


// App
const CardRestaurants = ({ restaurant }) => {
    const navigate=useNavigate()
    return (
        <MainContainer onClick={()=> goToDetailsPage(navigate, restaurant.id)}>
            <IMG src={restaurant.logoUrl} />
            <Name> {restaurant.name}</Name>
            <BoxInfo>
                <Info>Delivery time: {restaurant.deliveryTime} min</Info>
                <Info>Delivery fee: $ {restaurant.shipping}</Info>
            </BoxInfo>
        </MainContainer>
    )
}

export default CardRestaurants