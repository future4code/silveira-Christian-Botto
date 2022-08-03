import { MainContainer } from "./styled"


const CardRepo = (props) => {
    return(
        <MainContainer>
            <a href={props.url} target="_blank" >{props.name}  </a>
        </MainContainer>
    )
}

export default CardRepo