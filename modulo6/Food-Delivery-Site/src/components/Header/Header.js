import { ArrowBackIosNew } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import { MainContainer, Title } from "./styled"
import { goBack } from "../../router/coordinator"

// App
const Header = ({title, back}) => {

    const navigate = useNavigate()

    return(
        <MainContainer >
            {back && < ArrowBackIosNew onClick={() => goBack(navigate)}/>}
            <Title>{title}</Title>
        </MainContainer>
    )
}

export default Header