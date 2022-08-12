import { useNavigate } from "react-router-dom"
import { MainContainer, AvatarStyled, HomeStyled, CartStyled, MenuSpacer } from "./styled"

import { goToHomePage, goToCartPage, goToProfilePage } from "../../router/coordinator"

// App
const Menu = ({ page }) => {

    const navigate = useNavigate()

    return (
        <>
            <MainContainer >
                <HomeStyled onClick={()=> goToHomePage(navigate)} pageCurrent = {page === "home"}/>
                <CartStyled onClick={()=> goToCartPage(navigate)} pageCurrent = {page === "cart"}/>
                <AvatarStyled onClick={()=> goToProfilePage(navigate)} pageCurrent = {page === "profile"}/>
            </MainContainer>
            <MenuSpacer />
        </>
    )
}

export default Menu