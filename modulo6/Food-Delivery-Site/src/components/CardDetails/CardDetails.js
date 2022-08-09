import { useNavigate } from "react-router-dom"
import { goToDetailsPage } from "../../router/coordinator"
// Styles
import { MainContainer, IMG, BoxInfo, Info, Name } from "./styled"


// App
const CardDetails = ({ restaurant }) => {
    const navigate=useNavigate()
    return (
        <MainContainer onClick={()=> goToDetailsPage(navigate, restaurant.id)}>
            <IMG src={restaurant.logoUrl} />
            <Name> {restaurant.name}</Name>
            <Info>{restaurant.category}</Info>
            <BoxInfo>
                <Info>{restaurant.deliveryTime}</Info>
                <Info>{restaurant.shipping}</Info>
            </BoxInfo>
            {restaurant.address}
        </MainContainer>
    )
}

export default CardDetails