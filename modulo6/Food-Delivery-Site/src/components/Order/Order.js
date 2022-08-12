import { useNavigate } from "react-router-dom"
import { MainContainer, ClockStyled, MenuSpacer, BoxInfo, Title, Name, Total } from "./styled"


import { goToHomePage, goToCartPage, goToProfilePage } from "../../router/coordinator"

// App
const Order = ({ total, restaurantName }) => {


    return (
        <>
            <MainContainer >
                <ClockStyled />
                <BoxInfo >
                    <Title>
                        Your order will be delivered soon!
                    </Title>
                    <Name>
                        {restaurantName}
                    </Name>
                    <Total>
                        Total: ${total}
                    </Total>
                </BoxInfo>
            </MainContainer>
            <MenuSpacer />
        </>
    )
}

export default Order