
// Styles
import { MainContainer, IMG, BoxInfo, Info, Name } from "./styled"


// App
const CardRestaurants = ({ restaurant }) => {
    return (
        <MainContainer>
            <IMG src={restaurant.logoUrl} />
            <Name> {restaurant.name}</Name>
            <BoxInfo>
                <Info>{restaurant.deliveryTime}</Info>
                <Info>{restaurant.shipping}</Info>
            </BoxInfo>
        </MainContainer>
    )
}

export default CardRestaurants