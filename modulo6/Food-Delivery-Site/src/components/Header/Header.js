import { MainContainer, Title } from "./styled"


// App
const Header = ({title}) => {
    return(
        <MainContainer>
            <Title>{title}</Title>
        </MainContainer>
    )
}

export default Header